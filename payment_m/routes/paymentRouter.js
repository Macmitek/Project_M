const express = require('express');
const paymentController = require('../controller/paymentController');

const router = express.Router();

router.get('/payments', paymentController.getPayments);
router.post('/payments', paymentController.createPayment);

module.exports = router;
