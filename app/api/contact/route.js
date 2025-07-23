// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      city, 
      message, 
      agreeToPrivacy, 
      subscribeNewsletter,
      recipientEmail 
    } = data;

    // 🔧 EMAIL SERVER CONFIGURATION - Google Workspace SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // erp-alert@keystoneuae.com
        pass: process.env.EMAIL_PASS, // App password for the account
      },
    });

    // 🔧 EMAIL CONTENT TEMPLATE - Customize the email format here
    const emailContent = `
      New Contact Form Submission from Ideal Home Website
      
      Customer Details:
      ==================
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      City: ${city}
      
      Message:
      ========
      ${message}
      
      Additional Info:
      ===============
      Privacy Policy Agreed: ${agreeToPrivacy ? 'Yes' : 'No'}
      Newsletter Subscription: ${subscribeNewsletter ? 'Yes' : 'No'}
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    const htmlContent = `
      <h2>New Contact Form Submission from Ideal Home Website</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3>Customer Details:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>City:</strong> ${city}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      
      <div style="background-color: #e9e9e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Additional Information:</h3>
        <p><strong>Privacy Policy Agreed:</strong> ${agreeToPrivacy ? '✅ Yes' : '❌ No'}</p>
        <p><strong>Newsletter Subscription:</strong> ${subscribeNewsletter ? '✅ Yes' : '❌ No'}</p>
        <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
      </div>
    `;

    // 🔧 EMAIL SETTINGS - Using Google Workspace alias
    const mailOptions = {
      from: `"Ideal Home Website" <${process.env.EMAIL_ALIAS}>`, // Using the alias email
      to: recipientEmail, // This will be sales@keystoneuae.com
      subject: `New Contact Form Submission from ${firstName} ${lastName}`, // Subject line
      text: emailContent, // Plain text version
      html: htmlContent, // HTML version
      replyTo: email, // Set reply-to as the customer's email
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email' 
      },
      { status: 500 }
    );
  }
}