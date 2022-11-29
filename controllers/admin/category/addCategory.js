const { CategoryDetails } = require("../../../models/category");

const addCategory = async (req, res) => {
    try {
           await CategoryDetails.create(req.body);
        res.json({
            statusCode:201,
            message:"Category Added Successfull"
        });
    } catch (error) {
        res.json({
            error,
            message:"Category Added Failed",
            statusCode:500,

        });
    }
};

module.exports = { addCategory };
