const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const {
  getAllRestaurantsController,
} = require("../../controller/restaurant/getAllRestaurantsController");

const router = express.Router();

router.get("/", ctrlWrapper(getAllRestaurantsController));

module.exports = router;
