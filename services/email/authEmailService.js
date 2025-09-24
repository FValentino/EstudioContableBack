import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

  const CLIENT_ID = process.env.CLIENT_ID_GMAIL;
  const CLIENT_SECRET = process.env.CLIENT_SECRET_GMAIL;
  const REDIRECT_URI = 'https://estudiocontableback.onrender.com/contact/auth-code'

  export const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );


export function authLinkService(){

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline', // muy importante para refresh token
    scope: ['https://www.googleapis.com/auth/gmail.send'],
    prompt: 'consent', // fuerza a pedir autorización cada vez
  });

  return authUrl;
}

