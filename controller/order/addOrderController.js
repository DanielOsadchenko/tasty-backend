const { addOrderService } = require("../../servises/orders/addOrderService");

const addOrderController = async (req, res) => {
  const { user, food, totalPrice } = req.body;
  await addOrderService(user, food, totalPrice);
  res.status(201).json("Success!");
};

module.exports = { addOrderController };
