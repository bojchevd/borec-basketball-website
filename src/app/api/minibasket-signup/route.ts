import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ANY_HALL } from "@/data/minibasket-trainings";

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px;color:#999;font-size:13px;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#fff;font-size:13px">${value}</td></tr>`;
}

function section(title: string, rows: string) {
  return `
    <table width="100%" style="margin-bottom:8px">
      <tr><td style="padding:10px 12px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#C9A635;border-bottom:1px solid #333">${title}</td><td style="border-bottom:1px solid #333"></td></tr>
      ${rows}
    </table>`;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const {
      childName,
      birthDate,
      gender,
      childPhone,
      school,
      grade,
      hall,
      parentName,
      parentEmail,
      parentPhone,
      parentPhone2,
      healthIssues,
      healthDetails,
      boneInjury,
      boneInjuryDetails,
      signedBy,
      notifications,
    } = body;

    if (!childName || !birthDate || !gender || !school || !grade || !parentName || !parentEmail || !parentPhone || !signedBy) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:24px">

    <div style="text-align:center;padding:20px 0 24px;border-bottom:2px solid #C9A635">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:1px">МИНИБАСКЕТ ПРИЈАВА</h1>
      <p style="margin:6px 0 0;color:#666;font-size:12px">Борец Баскет · Велес</p>
    </div>

    <div style="padding:20px 0">
      ${section("Податоци за детето",
        row("Име и презиме", childName) +
        row("Датум на раѓање", birthDate) +
        row("Пол", gender) +
        row("Тел. број", childPhone || "–") +
        row("Училиште", school) +
        row("Одделение", grade) +
        row("Сала", hall || "–")
      )}

      ${section("Родител / Старател",
        row("Име", parentName) +
        row("Е-маил", `<a href="mailto:${parentEmail}" style="color:#C9A635;text-decoration:none">${parentEmail}</a>`) +
        row("Контакт тел.", parentPhone) +
        row("Контакт тел. 2", parentPhone2 || "–")
      )}

      ${section("Медицински забелешки",
        row("Здравствени проблеми", healthIssues === "yes"
          ? `<span style="color:#e74c3c">ДА</span> — ${healthDetails}`
          : `<span style="color:#2ecc71">НЕ</span>`) +
        row("Повреда коски/зглобови", boneInjury === "yes"
          ? `<span style="color:#e74c3c">ДА</span> — ${boneInjuryDetails}`
          : `<span style="color:#2ecc71">НЕ</span>`)
      )}

      ${section("Потпис",
        row("Потпишано од", signedBy)
      )}

      <div style="margin-top:16px;padding:10px 12px;border-radius:6px;background:${notifications === "yes" ? "rgba(46,204,113,0.1)" : "rgba(255,255,255,0.03)"}">
        <span style="font-size:12px;color:${notifications === "yes" ? "#2ecc71" : "#666"}">
          Известувања (СМС/Емаил): ${notifications === "yes" ? "ДА — се согласува" : "НЕ"}
        </span>
      </div>
    </div>

    <div style="border-top:1px solid #333;padding:16px 0 0;text-align:center">
      <p style="margin:0;font-size:11px;color:#444">Испратено преку borec-basket.com</p>
    </div>

  </div>
</body>
</html>`.trim();

    await resend.emails.send({
      from: "Borec Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: parentEmail,
      subject: `Минибаскет упис: ${childName}${hall && hall !== ANY_HALL ? ` · ${hall}` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
