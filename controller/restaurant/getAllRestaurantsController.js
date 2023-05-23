const {
  getAllRestaurantsService,
} = require("../../servises/restaurants/getAllRestaurantsService");

const getAllRestaurantsController = async (req, res) => {
  const data = await getAllRestaurantsService();
  res.status(200).json({ data });
};

module.exports = { getAllRestaurantsController };
