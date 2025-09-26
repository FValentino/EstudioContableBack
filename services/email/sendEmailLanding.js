import nodemailer from "nodemailer";
import dotenv from "dotenv";
import transporter from "../../config/emailConfig.js"
import { Resend } from 'resend';

dotenv.config();

export async function sendEmail(subject, text) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: `I&M <${process.env.FROM_EMAIL}>`,
      to: [process.env.USER_EMAIL],
      subject: `[web] ${subject}`,
      html: text
    });

    return data;
  } catch (error) {
    console.error("Error enviando email:", error);
    throw error;
  }
}


