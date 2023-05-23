const { Order } = require("../../db/orderModel");

const addOrderService = async (user, food, totalPrice) => {
  const order = new Order({ user, food, totalPrice });
  await order.save();
};
module.exports = { addOrderService };
