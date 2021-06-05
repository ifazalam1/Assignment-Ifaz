const productRouter = require("express").Router();
const Products = require("../models/Products");
// get all Products
productRouter.get("/", async (req, res) => {
  try {
    console.log("tried getting all posts");
    const allProducts = await Products.find({});
    return res.render("allProducts", { products: allProducts });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

productRouter.get("/cart", async (req, res) => {
  console.log("successfully navigated to cart route");
  try {
    return res.render("cart");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// get single Product
productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("successfully navigated to post details route");
  try {
    const singleProduct = await Products.findOne({ _id: id });
    return res.render("productDetails", { product: singleProduct });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// create product
productRouter.post("/create", async (req, res) => {
  console.log("entered product routes");
  try {
    const { name, photoUrl, quantity, price } = req.body;
    const newProduct = await Products.create({
      name,
      photoUrl,
      quantity,
      price,
    });
    console.log(newProduct);
    return res.json(newProduct);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

module.exports = productRouter;
