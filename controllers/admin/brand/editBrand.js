const { BrandDetails } = require("../../../models/brand");

const editBrand = async (req, res) => {
    try {
        await BrandDetails.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            statusCode:200,
            message:"Brand Updated successfully"
        });
        
    } catch (error) {
        res.json({
            error,
            message:"Brand Update Failed",
            statusCode:500,

        });
    }
};

module.exports = { editBrand };
