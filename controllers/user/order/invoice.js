const { orderDetails } = require("../../../models/orderModal");

const invoice = async (req, res) => {
    try {
        let id = await orderDetails.findById(req.params.id);
        res.json({
            statusCode: 200,
            message: "Order Invoice Send successfull",
            order_id: id._id,
            customer:id.customer,
            order:id.order,
            payment:id.payment,
            payment_id:id.payment_id,
            paymenttype:id.paymenttype,
        });
    } catch (error) {
        res.json({
            error,
            message: "Order Invoice Send Failed",
            statusCode: 500,
        });
    }
};

module.exports = { invoice };
