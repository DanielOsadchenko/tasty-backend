const { Restaurant } = require("../../db/restaurantModel");

const getAllRestaurantsService = async () => {
  const data = await Restaurant.find();
  return data;
};
module.exports = { getAllRestaurantsService };
