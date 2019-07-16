const mongoose = require("mongoose");
const schema = mongoose.Schema;

const rentalSchema = new schema({
  title: { type: String, required: true, max: [128, "Too long"] },
  city: { type: String, required: true, max: [128, "Too long"] },
  street: { type: String, required: true, max: [128, "Too long"] },
  category: { type: String, required: true, max: [128, "Too long"] },
  image: { type: String, required: true, max: [128, "Too long"] },
  bedroom: Number,
  shared: Boolean,
  description: { type: String, max: [300, "Too long"] },
  dialyRate: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rental", rentalSchema);
