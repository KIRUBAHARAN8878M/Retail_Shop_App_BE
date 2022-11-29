const { CategoryDetails } = require("../../../models/category");


const deleteCategory = async (req, res) => {
    try {
        await CategoryDetails.findByIdAndDelete(req.params.id, req.body);
        res.json({
            statusCode:200,
            message:"Category Deleted Successfully"
        });
        
    } catch (error) {
        res.json({
            error,
            message:"Category Deleted Failed",
            statusCode:500,

        });
    }
};

module.exports = { deleteCategory };