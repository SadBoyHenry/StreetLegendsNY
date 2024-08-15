const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Message from ${name} (${email}): ${message}`);

  res.status(200).json({ message: 'Message received, thank you!' });
});

module.exports = router;
