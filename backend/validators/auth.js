const { check } = require("express-validator");

exports.userSignupVAlidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Enter valid Email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 chars long"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Enter valid Email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 chars long"),
];
