import nodemailer from "nodemailer";
import dotenv from "dotenv";
import transporter from "../../config/emailConfig.js"

dotenv.config();

export async function sendEmail(subject, text) {
  try {
    const info = await transporter.sendMail({
      from: `I&M <${process.env.USER_EMAIL}>`,
      to: process.env.USER_EMAIL,
      subject: `[web] ${subject}`,
      text: text
    });

    console.log("✅ Email enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error al enviar email:", error);
    throw error;
  }
}

