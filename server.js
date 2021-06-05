require("dotenv").config();
// const app = require("express")();
const express = require('express');
var app = express();
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const port = 3000 || process.env.PORT;
const databaseConnection = require("./config");

app.use(express.static("public"))
app.set("views", "./public/views");
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());

const serverCallback = async () => {
  try {
    await databaseConnection;
    console.log("successfully connected to database");
  } catch (error) {
    console.log("failed to connect due to ", error);
  }
  console.log(`Server started at localhost:${port}`);
};

// add Product
app.get("/addProduct", async (req, res) => {
  console.log("reached");
  res.render("addProduct");
});
app.use("/product", productRoutes);
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, serverCallback);
