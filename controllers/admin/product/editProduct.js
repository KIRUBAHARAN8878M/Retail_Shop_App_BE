const { ProductDetails } = require("../../../models/product");

const editProducts = async (req, res) => {
    try {
        let { quantity } = req.body;
        const doc = await ProductDetails.findById(req.params.id);
        if (quantity != doc.quantity) {
            req.body.availableInStock = (quantity - doc.quantity) + doc.availableInStock
        }
        await ProductDetails.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            statusCode: 200,
            message: "Product Updated Successfully"
        });
    } catch (error) {
        res.json({
            error,
            message: "Product Update Failed",
            statusCode: 500,
        });
    }
};

module.exports = { editProducts };
