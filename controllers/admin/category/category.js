const { CategoryDetails } = require("../../../models/category");


const category = async (req, res) => {

    try {
        const { q } = req.query
        let value = await CategoryDetails.find();
        if (!q) {
            res.status(200).json({data:value});       
        } else {
            const keys = ["category"]
            let data = value.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)))
            res.status(200).json({data});
            // brand = await CategoryDetails.find({ $regex : q});
        }
    } catch (error) {
        res.status(500).json(error);
    }

}

module.exports = { category }