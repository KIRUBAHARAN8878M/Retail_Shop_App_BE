const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        customer: { type: Object, required: true },
        order: { type: Array, required: true },
        payment: { type: Object, required: true },
        payment_id: { type: String, default:"none"},
        paymenttype: { type: String },
        billerName:{ type: String },
        billerId:{ type: String },
        createdAt: { type: Date, default: Date.now }
    },
);

const orderDetails = mongoose.model("Orders", OrderSchema);
module.exports = { orderDetails }