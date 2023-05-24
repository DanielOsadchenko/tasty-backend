const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: [true, "Set name for order"] },
    email: { type: String, required: [true, "Set email for order"] },
    phone: { type: String, required: [true, "Set phone for order"] },
    adress: { type: String, required: [true, "Set adress for order"] },
  },
  food: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = {
  Order,
};
