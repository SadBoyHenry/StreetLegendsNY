const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
