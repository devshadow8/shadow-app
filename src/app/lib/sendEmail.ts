// lib/sendEmail.ts
import nodemailer from "nodemailer";

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  company?: string;
  course: string;
  trainer: string;
  message: string;
}

export async function sendEmail({
  name,
  email,
  phone,
  company,
  course,
  trainer,
  message,
}: EmailParams) {
  // GoDaddy SMTP env check
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    throw new Error(
      "Missing SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / ADMIN_EMAIL in .env.local"
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // 465 = SSL, 587 = STARTTLS
    auth: {
      user: SMTP_USER, // hr@shadowrecruiter.com
      pass: SMTP_PASS, // mailbox password
    },
  });

  // Helpful: throws clear error if SMTP details are wrong
  await transporter.verify();

  // Admin email (goes to hr@shadowrecruiter.com)
  const adminMailOptions = {
    from: `"Shadow Recruiters" <${SMTP_USER}>`,
    to: ADMIN_EMAIL, // hr@shadowrecruiter.com
    replyTo: email, // so HR can directly reply to user
    subject: `New Contact Form - ${course} Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Course Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company || "-"}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Trainer:</b> ${trainer}</p>
        <p><b>Message:</b><br/>${message}</p>
        <p style="color:#666;font-size:12px;"><b>Received:</b> ${new Date().toLocaleString(
          "en-IN",
          { timeZone: "Asia/Kolkata" }
        )}</p>
      </div>
    `,
  };

  // Auto-reply to user
  const userMailOptions = {
    from: `"Shadow Recruiters" <${SMTP_USER}>`,
    to: email,
    subject: `Thank you for your interest in ${course} - Shadow Recruiters`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>Hi ${name},</p>
        <p>
          We received your inquiry about <b>${course}</b>. Our team will contact you within 24 hours.
        </p>
        <p>
          If you need immediate help, call <b>+91 8483852326</b>.
        </p>
        <p>Regards,<br/><b>Shadow Recruiters Team</b></p>
      </div>
    `,
  };

  await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(userMailOptions),
  ]);
}
