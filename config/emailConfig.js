import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); 

const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    type: "OAuth2",
    user: process.env.USER_EMAIL,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
  },
});

export default transporter;