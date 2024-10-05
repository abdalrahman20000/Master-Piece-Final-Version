const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: String,
  image: String,
  description: String,
}, { timestamps: true });

const product = model("Product", productSchema);

module.exports = product;

