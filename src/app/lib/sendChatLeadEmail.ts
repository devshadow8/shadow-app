import nodemailer from "nodemailer";

export async function sendChatLeadEmail(params: {
  name: string;
  email: string;
  phone: string;
  service: string;
}) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    throw new Error("Missing SMTP env in .env.local");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: `"Shadow Recruiters" <${SMTP_USER}>`,
    to: ADMIN_EMAIL, // hr@...
    replyTo: params.email,
    subject: `New Chatbot Lead - ${params.name} (${params.service})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Chatbot Lead</h2>
        <p><b>Name:</b> ${params.name}</p>
        <p><b>Phone:</b> ${params.phone}</p>
        <p><b>Email:</b> ${params.email}</p>
        <p><b>Service:</b> ${params.service}</p>
        <p style="color:#666;font-size:12px;"><b>Received:</b> ${new Date().toLocaleString(
          "en-IN",
          { timeZone: "Asia/Kolkata" }
        )}</p>
      </div>
    `,
  });
}
