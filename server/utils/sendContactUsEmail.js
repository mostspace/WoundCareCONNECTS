const postmark = require('postmark');

// Create a new postmark client with your server API token
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

const sendContactUsEmail = async (name, email, phone, message) => {

  console.log(name, email, phone, message);
  try {
    // Send email using Postmark client
    await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: 'ana@woundcareconnects.com', 
      Subject: 'New Contact Form Submission',
      HtmlBody: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      TextBody: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      MessageStream: 'outbound' // Optional: Message stream for categorizing emails
    });

    console.log('Contact form message sent successfully');
  } catch (error) {
    console.error('Error sending contact form message:', error);
    throw new Error('Failed to send contact form message');
  }
};

module.exports = sendContactUsEmail;
