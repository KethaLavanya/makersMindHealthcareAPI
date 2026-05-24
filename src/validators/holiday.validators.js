const { body } = require("express-validator");

exports.holidayValidator = [
  body("holidayName").notEmpty(),

  body("date").notEmpty(),
];
