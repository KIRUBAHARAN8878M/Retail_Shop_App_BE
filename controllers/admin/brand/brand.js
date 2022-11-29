const { BrandDetails } = require("../../../models/brand");


const Brand = async (req, res) => {
    try {
        const { q } = req.query
        const brand = await BrandDetails.find();
        if (!q) {
            res.status(200).json({ data: brand });
        } else {
            const keys = ["brand"]
            let data = brand.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)))
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { Brand }