const Joi = require("joi");

const orderSchema = Joi.object({
  user: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    adress: Joi.string().required(),
  },
  food: Joi.array().required(),
  totalPrice: Joi.number().required(),
});

module.exports = { orderSchema };
