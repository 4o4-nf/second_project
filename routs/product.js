const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProduct,
  getAllUniqueCatagory
} = require("../controller/product");
const { isAdmin, isAuthenticated, isSignedIn } = require("../controller/auth");
const { getUserById } = require("../controller/user");

//All of params here
router.param("userId", getUserById);
router.param("productId", getProductById);

//All router here
//Create route
router.post(
  "/product/create/:userId",
  isAdmin,
  // We gonna come back here
  isAuthenticated,
  isSignedIn,
  createProduct
);

//Read routes
//Get a product
router.get("/product/:productId", getProduct);

router.get("/product/photo/:productId", photo);

//Delete route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAdmin,
  deleteProduct
);

//Update route
router.put("/product/:productId/:userId", isSignedIn, isAdmin, updateProduct);

//Listing route
router.get("/products", getAllProduct);

router.get("/products/catagories", getAllUniqueCatagory)

module.exports = router;
