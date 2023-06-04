const Joi = require("joi");

// const phoneRegenxp = /^(\d{3}) \d{3}-\d{2}-\d{2}$/;

const movieAddSchema = Joi.object({
    title: Joi.string().required(), // string() - строка, required() - обов'зковий
  // phone: Joi.string().pattern(phoneRegenxp).required(),
  director: Joi.string().required().messages({
    "any.required": `"director" is a required field`,
    "string.empty": `"director" cannot be an empty field`,
  }), // string() - строка, required() - обов'зковий
});
module.exports = {
  movieAddSchema,
}; 