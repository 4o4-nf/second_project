const express = require("express");
const router = express.Router();
const { isAdmin, isAuthenticated, isSignedIn } = require("../controller/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controller/user");
const { updateInventory } = require("../controller/product");

const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
} = require("../controller/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//Routes
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateInventory,
  createOrder
);

//Read
router.get(
  "/order/all/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  getAllOrders
);

//Update status
router.get(
  "/order/status/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  getOrderStatus
);

router.put(
  "/order/:orderId/status/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  updateStatus
);

module.exports = router;
