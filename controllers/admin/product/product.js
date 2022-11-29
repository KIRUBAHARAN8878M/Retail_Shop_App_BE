const { ProductDetails } = require("../../../models/product");

const products = async (req, res) => {
    try {
        const { q } = req.query
        const products = await ProductDetails.find();
        if (!q) {
            res.status(200).json({ data: products });
        } else {
            const keys = ["brand", "product", "category"]
            let data = products.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)))
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { products }