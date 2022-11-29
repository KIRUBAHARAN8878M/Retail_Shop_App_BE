const { ProductDetails } = require("../../../models/product");

const deleteProduct = async (req, res) => {
    try {
        await ProductDetails.findByIdAndDelete(req.params.id, req.body);
        res.json({
            statusCode:200,
            message:"Product Deleted Successfully"
        });
        
    } catch (error) {
        res.json({
            error,
            message:"Product Deleted Failed",
            statusCode:500,
        });
    }
};

module.exports = { deleteProduct };