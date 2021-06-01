const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//All routs
const authRoutes = require("./routs/auth");
const userRoutes = require("./routs/user");
const catagoryRoutes = require("./routs/catagory");
const productRoutes = require("./routs/product");
const orderRoutes = require("./routs/order")

const app = express();

//Database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", catagoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//Port
const port = process.env.PORT || 5000;

//Starting server
app.listen(port, (req, res) => {
  console.log("App is running..");
});
