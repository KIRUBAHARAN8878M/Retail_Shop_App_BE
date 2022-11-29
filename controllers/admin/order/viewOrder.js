const { orderDetails } = require("../../../models/orderModal");

const viewOrder = async (req, res) => {

    try {
       let data =  await orderDetails.find();
       res.json({
        message: "Order details Send Successfully",
        data,
    });
       
    } catch (error) {
        res.json({
            error,
            message: "Internal Server Error",
            statusCode: 500,  
        });
    }
};

module.exports = { viewOrder };
