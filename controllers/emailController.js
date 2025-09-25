import { sendEmail, sendEmailResend } from "../services/email/sendEmailLanding.js";


export async function sendContactEmail(req, res) {
  const { subject, html } = req.body;

  if (!subject || html) {
    return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }

  try {
    await sendEmailResend(subject, html);
    res.status(200).json({ success: true, message: "Email enviado correctamente!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error al enviar el email" });
  }
}

export async function sendNewsEmail(req, res) {
  const { subject, email} = req.body;

  if (!subject || !email ) {
    return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }

  const textMessage = `Me interesa recibir emails ocn novedades:\nMi emailes: ${email}`;

  try {
    await sendEmail(subject, textMessage);
    res.status(200).json({ success: true, message: "Email enviado correctamente!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error al enviar el email" });
  }
}


