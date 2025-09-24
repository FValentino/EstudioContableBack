import { authLinkService, oAuth2Client } from "../services/email/authEmailService.js";
import { sendEmail } from "../services/email/sendEmailLanding.js";


export async function sendContactEmail(req, res) {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message ) {
    return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }

  const textMessage = `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}`;

  try {
    await sendEmail(textMessage);
    res.status(200).json({ success: true, message: "Email enviado correctamente!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error al enviar el email" });
  }
}

export function authLink(req, res){
  const authUrl =authLinkService();
  res.send(`Abri este link para autorizar: <a href="${authUrl}" target="_blank">${authUrl}</a>`);;
}

export async function authCode(req, res){
  const code = req.query.code;
  if (!code) return res.send('No se recibió código');

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens); // guardar los tokens en el cliente
    console.log('Tokens obtenidos:', tokens);

    res.send('Autorización completada! Revisa la consola para ver los tokens.');
  } catch (err) {
    console.error(err);
    res.send('Error al intercambiar código por tokens');
  }
}

