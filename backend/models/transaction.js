const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true},
  refNumber: String,
  amount: Number,
  type: String
});

module.exports = mongoose.model('Transaction', transactionSchema);
