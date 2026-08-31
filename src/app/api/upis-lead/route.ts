import { NextResponse } from "next/server";
import { Resend } from "resend";

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px;color:#999;font-size:13px;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#fff;font-size:13px">${value}</td></tr>`;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { childName, childAge, parentName, phone, email, notifications } =
      await request.json();

    if (!childName || !childAge || !parentName || !phone || !email) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:480px;margin:0 auto;padding:24px">

    <div style="text-align:center;padding:16px 0 20px;border-bottom:2px solid #C9A635">
      <h1 style="margin:0;color:#fff;font-size:18px;font-weight:700;letter-spacing:1px">НОВ МИНИБАСКЕТ LEAD</h1>
      <p style="margin:4px 0 0;color:#666;font-size:11px">Од /upis рекламна страница</p>
    </div>

    <table width="100%" style="margin:20px 0">
      <tr><td style="padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#C9A635;border-bottom:1px solid #333">Дете</td><td style="border-bottom:1px solid #333"></td></tr>
      ${row("Име", childName)}
      ${row("Возраст", `${childAge} години`)}
    </table>

    <table width="100%" style="margin:20px 0">
      <tr><td style="padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#C9A635;border-bottom:1px solid #333">Родител / Старател</td><td style="border-bottom:1px solid #333"></td></tr>
      ${row("Име", parentName)}
      ${row("Телефон", phone)}
      ${row("Е-маил", `<a href="mailto:${email}" style="color:#C9A635;text-decoration:none">${email}</a>`)}
    </table>

    <div style="margin-top:16px;padding:10px 12px;border-radius:6px;background:${notifications === "yes" ? "rgba(46,204,113,0.1)" : "rgba(255,255,255,0.03)"}">
      <span style="font-size:12px;color:${notifications === "yes" ? "#2ecc71" : "#666"}">
        Известувања: ${notifications === "yes" ? "ДА — се согласува" : "НЕ"}
      </span>
    </div>

    <div style="border-top:1px solid #333;margin-top:20px;padding:12px 0 0;text-align:center">
      <p style="margin:0;font-size:11px;color:#444">Испратено преку borec-basket.com/upis</p>
    </div>

  </div>
</body>
</html>`.trim();

    await resend.emails.send({
      from: "Borec Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Минибаскет lead: ${childName} (${childAge} год.)`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
