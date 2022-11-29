const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        brand: { type: String, required: true }, 
        category: { type: String, required: true }, 
        product: { type: String, required: true },  
        rate: { type: Number, required: true }, 
        quantity: { type: Number, required: true },
        sold: { type: Number, default: 0 }, 
        productImage: { type: String, required: true }, 
        availableInStock : { type: Number,default: 0},
        createdAt: { type: Date, default: Date.now }

    },
);

const ProductDetails = mongoose.model("Products", ProductSchema);
module.exports = {ProductDetails}