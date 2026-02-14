const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  product: { type: String, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: String,
  day: String,
  isLoss: { type: Boolean, default: false },
});

module.exports = PositionSchema;
