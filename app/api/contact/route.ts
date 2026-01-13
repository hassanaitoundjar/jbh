import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // your email password or app password
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to you (receiving the contact form)
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL, // sender address
      to: process.env.SMTP_TO_EMAIL, // your business email
      subject: `Nouveau Message de Contact: ${service || 'Général'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nouveau Message de Contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom Complet:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
                <div class="field">
                  <div class="label">Téléphone:</div>
                  <div class="value">${phone}</div>
                </div>
              ` : ''}
              
              ${service ? `
                <div class="field">
                  <div class="label">Service Requis:</div>
                  <div class="value">${service}</div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Reçu le: ${new Date().toLocaleString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to the user
    const autoReplyOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Merci pour votre message - JBH Engineering',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Message Reçu!</h1>
            </div>
            <div class="content">
              <p>Bonjour ${name},</p>
              <p>Merci de nous avoir contactés. Nous avons bien reçu votre message et notre équipe vous répondra dans les 24 heures.</p>
              <p><strong>Résumé de votre demande:</strong></p>
              <p>${service ? `<strong>Service:</strong> ${service}<br>` : ''}
              <strong>Message:</strong> ${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
              
              <div class="footer">
                <p><strong>JBH Engineering</strong><br>
                Excellence en Ingénierie</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}