const nodemailer = require('nodemailer');
const { email, emailPassword } = require('../config/keys');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: emailPassword,
  },
});

exports.sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: email,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Email not sent');
  }
};
