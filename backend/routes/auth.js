const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");

//validatores

const { runValidation } = require("../validators");
const {
  userSignupVAlidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupVAlidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("signout", signout);

//test
router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "you have access to secret page",
  });
});

module.exports = router;
