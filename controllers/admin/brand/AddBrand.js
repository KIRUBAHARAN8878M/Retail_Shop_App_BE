const { BrandDetails } = require("../../../models/brand");


const AddBrand = async (req, res) => {
    try {
           await BrandDetails.create(req.body);
        res.json({
            statusCode:201,
            message:"Brand added successfull"
        });
    } catch (error) {
        res.json({
            error,
            message:"Brand added Failed",
            statusCode:500,

        });
    }
};

module.exports = { AddBrand };
