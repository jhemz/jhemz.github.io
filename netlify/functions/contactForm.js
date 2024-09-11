const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  // Nodemailer transport setup (you can use Gmail or any other service)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Add your Gmail user in Netlify environment variables
      pass: process.env.GMAIL_PASS, // Add your Gmail password in Netlify environment variables
    },
  });

  // Email content options
  let mailOptions = {
    from: email, // Sender's email
    to: process.env.GMAIL_USER, // Your email to receive messages
    subject: `Jampot Devon&Cornwall Message ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    // Send email using Nodemailer
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error.message);

    // Returning the error message
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message, error: error.message }),
    };
  }
};