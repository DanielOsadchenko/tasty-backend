const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
  },
  menu: [
    { id: String, name: String, descr: String, price: Number, image: String },
  ],
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

module.exports = {
  Restaurant,
};
