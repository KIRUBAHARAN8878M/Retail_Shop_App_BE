const { ProductDetails } = require("../../../models/product");

const dashboardProducts = async (req, res) => {
    try {
        const { q } = req.query;
        const re = /^\d*(\.\d+)?$/;
        const value = await ProductDetails.find();
        const products = value.map((item) => {
            return {
                product: item.product,
                bought: item.quantity,
                sold: item.sold,
                avaliableStock: item.availableInStock,
            };
        });
        if (!q) {
            res.json({
                statusCode: 200,
                products,
            });
        } else if (q.match(re)) {
            let data = products.filter((item) => item.avaliableStock <= q);
            res.json({
                statusCode: 200,
                products: data,
            });
        } else {
            const keys = ["product"];
            let data = products.filter((item) =>
                keys.some((key) => item[key].toLowerCase().includes(q))
            );
            res.json({
                statusCode: 200,
                products: data,
            });
        }
    } catch (error) {
        res.json({
            error,
            message: "Server Side Error",
            statusCode: 500,
        });
    }
};

module.exports = { dashboardProducts };
