const { model, Schema } = require("mongoose");

const productSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  photoUrl: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
    min: 0,
  },
  price: {
    required: true,
    type: Number,
    min: 10,
  },
});

const Products = model("Products", productSchema);
module.exports = Products;
