const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  customerName: String,
  shopkeeperName: String,
  amount: Number,
  date: Date,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
