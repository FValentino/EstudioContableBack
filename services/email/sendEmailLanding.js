import nodemailer from "nodemailer";
import dotenv from "dotenv";
import transporter from "../../config/emailConfig.js"
import { Resend } from 'resend';

dotenv.config();

export async function sendEmailResend(subject, text) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: `I&M <${process.env.USER_EMAIL}>`,
      to: [process.env.USER_EMAIL],
      subject: `[web] ${subject}`,
      html: text
    });

    console.log("Email enviado:", data);
    return data;
  } catch (error) {
    console.error("Error enviando email:", error);
    throw error;
  }
}

export async function sendEmail(subject, html) {
  try {
    const info = await transporter.sendMail({
      from: "I&M <onboarding@resend.dev>", // remitente válido de Resend
      to: process.env.USER_EMAIL,          // tu Gmail
      subject: `[web] ${subject}`,
      html: html,
    });

    console.log("✅ Email enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error al enviar email:", error);
    throw error;
  }
}

