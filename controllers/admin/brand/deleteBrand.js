const { BrandDetails } = require("../../../models/brand");

const deleteBrand = async (req, res) => {
    try {
        await BrandDetails.findByIdAndDelete(req.params.id, req.body);
        res.json({
            statusCode:200,
            message:"Brand Deleted Successfully"
        });
        
    } catch (error) {
        res.json({
            error,
            message:"Brand Deleted Failed",
            statusCode:500,

        });
    }
};

module.exports = { deleteBrand };