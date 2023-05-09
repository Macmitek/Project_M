const Payment = require('../models/payment');

const paymentController = {};

paymentController.getPayments = async (req, res) => {
  console.log('inside get payments controller');
  const payments = await Payment.find();
  res.json(payments);
};

paymentController.createPayment = async (req, res) => {
  const { customerName, shopkeeperName, amount } = req.body;
  const date = new Date();
  const payment = new Payment({ customerName, shopkeeperName, amount, date });
  await payment.save();
  res.json(payment);
};

module.exports = paymentController;
