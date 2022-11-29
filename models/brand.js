const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
    {
        brand: { type: String, required: true },  
        createdAt: { type: Date, default: Date.now }

    },
);

const BrandDetails = mongoose.model("Brands", BrandSchema);
module.exports = {BrandDetails}