import { sendEmail } from "../services/email/sendEmailLanding.js";


export async function sendContactEmail(req, res) {
  const { subject, name, email, phone, message } = req.body;

  if (!subject || !name || !email || !phone || !message ) {
    return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }

  const textMessage = `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}`;

  try {
    await sendEmail(subject, textMessage);
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


