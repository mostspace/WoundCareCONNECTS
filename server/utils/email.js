// utils/email.js
const postmark = require('postmark');

// Create a new postmark client with your server API token
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

const sendPasswordResetEmail = (email, resetLink) => {
  return client.sendEmail({
    From: process.env.POSTMARK_FROM_EMAIL,
    To: email,
    Subject: 'Password Reset Request',
    HtmlBody: `<p>You requested to reset your password. Click <a href="${resetLink}">here</a> to reset it.</p>`,
    TextBody: `You requested to reset your password. Use the following link to reset it: ${resetLink}`,
    MessageStream: 'outbound'
  });
};

module.exports = sendPasswordResetEmail;