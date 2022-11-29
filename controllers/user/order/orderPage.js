const { orderDetails } = require("../../../models/orderModal");
const { ProductDetails } = require("../../../models/product");

const order = async (req, res) => {

    try {
        const { order } = req.body;
     let id =    await orderDetails.create(req.body);
        for await (const data of order) {
            let query = data.id;
            const doc = await ProductDetails.findById(query);
            doc.sold = doc.sold + data.quantity;
            await doc.save();
            const inStock = await ProductDetails.findById(query);
            inStock.availableInStock = inStock.availableInStock - data.quantity;
            await inStock.save();
        }
        res.json({
            statusCode: 201,
            message: "Order added successfull",
            id : id._id,
        });
    } catch (error) {
        res.json({
            error,
            message: "Order added Failed",
            statusCode: 500,
        });
    }
};

module.exports = { order };
