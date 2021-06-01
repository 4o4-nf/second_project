const express = require("express");
const router = express.Router();

const { getCatagoryById, createCtagory, getCatagory, getAllCatagory, updateCtagory, removeCtagory} = require("../controller/catagory");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controller/auth");
const { getUserById } = require("../controller/user");

//Params
router.param("userId", getUserById);
router.param("catagoryId", getCatagoryById);

//Actual routs goes here

//create
router.post(
  "/catagory/create/:userId",
  isSignedIn,
  isAdmin,
  
  createCtagory
);

//read
router.get("/catagory/:catagoryId", getCatagory);

//Get all catagories
router.get("/catagories", getAllCatagory);

//update
router.post(
  "/catagory/:catagoryId/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  updateCtagory
);

//delete
router.post(
  "/catagory/:catagoryId/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  removeCtagory
);

module.exports = router;
