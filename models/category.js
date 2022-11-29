const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        category: { type: String, required: true },  
        createdAt: { type: Date, default: Date.now }

    },
);

const CategoryDetails = mongoose.model("Category", CategorySchema);
module.exports = {CategoryDetails}