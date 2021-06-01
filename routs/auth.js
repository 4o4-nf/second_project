const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controller/auth");

router.post(
  "/signup",
  [
    check("name", "Name should be at least three character").isLength({
      min: 1,
    }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least five charecter").isLength({
      min: 5,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password field is required").isLength({
      min: 1,
    }),
  ],
  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res)=>{
  res.send(req.auth)
})

module.exports = router;
