const { ProductDetails } = require("../../../models/product");

const dashboardOverview = async (req, res) => {
    try {
        const value = await ProductDetails.find();
        const bought = value.map((item) => item.quantity).reduce((initialValue, currentValue) => initialValue + currentValue);
        const sold = value.map((item) => item.sold).reduce((initialValue, currentValue) => initialValue + currentValue);
        const outOfStock = value.filter((item) => item.availableInStock == 0)
        const totalAvaliableStock = value.map((item) => item.availableInStock).reduce((initialValue, currentValue) => initialValue + currentValue);
        res.json({
            statusCode: 200,
            totalProducts: value.length,
            bought,
            sold,
            outOfStock: outOfStock.length,
            totalAvaliableStock,
        });
    } catch (error) {
        res.json({
            error,
            message: "Server Side Error",
            statusCode: 500,
        });
    }
}

module.exports = { dashboardOverview }