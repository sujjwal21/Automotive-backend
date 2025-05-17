const Inquiry = require('../models/Inquiry');

exports.submitInquiry = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newInquiry = new Inquiry({ name, email, message });
    await newInquiry.save();
    res.status(201).json({ message: 'Inquiry submitted successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
