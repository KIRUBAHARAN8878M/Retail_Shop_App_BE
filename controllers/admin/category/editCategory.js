const { CategoryDetails } = require("../../../models/category");

const editCategory = async (req, res) => {
    try {
        await CategoryDetails.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            statusCode:200,
            message:"Category Updated Successfully"
        });
        
    } catch (error) {
        res.json({
            error,
            message:"Category Update Failed",
            statusCode:500,

        });
    }
};

module.exports = { editCategory };
