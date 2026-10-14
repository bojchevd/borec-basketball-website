import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isContactTopic } from "@/lib/contact";
import { getTranslations } from "@/lib/i18n";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { type, topic, name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    const form = getTranslations("mk").contact.form;
    const isBusiness = type === "business";
    const topicLabel = isBusiness && isContactTopic(topic) ? form.topics[topic] : null;
    const tag = isBusiness ? `[${[form.typeBusiness, topicLabel].filter(Boolean).join(" · ")}] ` : "";
    await resend.emails.send({
      from: "Borec Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `${tag}Contact form: ${name}`,
      text: [
        isBusiness ? `${form.company}: ${name}` : `Name: ${name}`,
        topicLabel && `${form.topic}: ${topicLabel}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].filter((line) => line !== null).join("\n"),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
