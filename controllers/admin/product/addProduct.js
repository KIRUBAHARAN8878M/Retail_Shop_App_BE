const { ProductDetails } = require("../../../models/product");


const addProduct = async (req, res) => {
    try {
        let { quantity } = req.body;
        req.body.availableInStock = quantity;
        await ProductDetails.create(req.body);
        res.json({
            statusCode: 201,
            message: "Product Added Successfull"
        });
    } catch (error) {
        res.json({
            error,
            message: "Product Added Failed",
            statusCode: 500,
        });
    }
};

module.exports = { addProduct };
