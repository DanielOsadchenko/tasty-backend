const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { orderSchema } = require("../../schemas/order");
const {
  addOrderController,
} = require("../../controller/order/addOrderController");

const router = express.Router();

router.post("/", validation(orderSchema), ctrlWrapper(addOrderController));

module.exports = router;
