// functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sushmadeegoju16@gmail.com', // Replace with your Gmail email
      pass: 'Mom@5408248821', // Replace with your Gmail password
    },
  });

  const mailOptions = {
    from: email,
    to: 'sushmadeegoju16@gmail.com', // Replace with the target email in Togo
    subject: `Message from ${name}`,
    text: `Email: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
