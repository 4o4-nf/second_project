const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controller/auth");
const { getUserById, getUser, updateUser, userPurchaseList } = require("../controller/user");
const router = express.Router();

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.put("/order/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);

module.exports = router;
