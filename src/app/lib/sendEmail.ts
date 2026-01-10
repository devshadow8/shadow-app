import nodemailer from 'nodemailer';

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
  message 
}: EmailParams) {
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form - ${course} Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Shadow Recruiters</h1>
          <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">New Course Inquiry</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #8B5CF6; margin-top: 0;">Contact Details</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #6b7280;">Name:</strong> <span style="color: #111827;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #6b7280;">Email:</strong> <a href="mailto:${email}" style="color: #8B5CF6; text-decoration: none;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #6b7280;">Phone:</strong> <a href="tel:${phone}" style="color: #8B5CF6; text-decoration: none;">${phone}</a></p>
            ${company ? `<p style="margin: 10px 0;"><strong style="color: #6b7280;">Company:</strong> <span style="color: #111827;">${company}</span></p>` : ''}
          </div>

          <h3 style="color: #8B5CF6; margin-top: 25px;">Course Information</h3>
          <div style="background: #EDE9FE; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #8B5CF6;">
            <p style="margin: 8px 0;"><strong style="color: #5B21B6;">Selected Course:</strong> <span style="color: #111827; font-size: 16px;">${course}</span></p>
            <p style="margin: 8px 0;"><strong style="color: #5B21B6;">Assigned Trainer:</strong> <span style="color: #111827;">${trainer}</span></p>
          </div>

          <h3 style="color: #8B5CF6; margin-top: 25px;">Message</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 15px 0; border: 1px solid #e5e7eb;">
            <p style="color: #374151; line-height: 1.6; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f3f4f6;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              <strong>Received:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
          <p>Shadow Recruiters - Transforming Careers</p>
        </div>
      </div>
    `,
  };

  // Auto-reply email to user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for your interest in ${course} - Shadow Recruiters`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Shadow Recruiters</h1>
          <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Transform Your Career & Personality</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #8B5CF6;">Thank You for Reaching Out, ${name}!</h2>
          
          <p style="color: #374151; line-height: 1.6;">
            We've received your inquiry about <strong style="color: #8B5CF6;">${course}</strong> and are excited to help you begin your transformation journey!
          </p>

          <div style="background: #EDE9FE; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #8B5CF6;">
            <h3 style="color: #5B21B6; margin-top: 0;">Your Course Selection</h3>
            <p style="margin: 8px 0; color: #374151;"><strong>Course:</strong> ${course}</p>
            <p style="margin: 8px 0; color: #374151;"><strong>Trainer:</strong> ${trainer}</p>
            <p style="margin: 8px 0; color: #374151;"><strong>Response Time:</strong> Within 24 hours</p>
          </div>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">What Happens Next?</h3>
            <ul style="color: #374151; line-height: 1.8; margin: 10px 0; padding-left: 20px;">
              <li>Our team will review your inquiry</li>
              <li>We'll contact you within 24 hours</li>
              <li>Get detailed course information and schedule</li>
              <li>Discuss your specific learning goals</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%); padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
            <p style="color: white; margin: 0; font-size: 16px;">
              <strong>Need Immediate Assistance?</strong>
            </p>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">
              Call us at <a href="tel:+918483852326" style="color: white; text-decoration: none; font-weight: bold;">+91 8483852326</a>
            </p>
          </div>

          <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin-top: 25px;">
            Best regards,<br>
            <strong style="color: #8B5CF6;">Shadow Recruiters Team</strong>
          </p>
        </div>

        <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px; border: 1px solid #e5e7eb;">
          <p style="color: #374151; margin: 0 0 10px 0; font-size: 14px;"><strong>Contact Information:</strong></p>
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            📍 Office No. 2S1-06, 1st Floor, Konark Indrayu Mall<br>
            Opp. Satyanand Hospital, Kondhwa, Pune<br>
            📞 +91 8483852326<br>
            ✉️ hr@shadowrecruiter.com<br>
            🕐 Mon - Sat: 9AM - 6PM
          </p>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
          <p>© 2026 Shadow Recruiters. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  // Send both emails
  await transporter.sendMail(adminMailOptions);
  await transporter.sendMail(userMailOptions);
}