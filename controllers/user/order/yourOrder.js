const { orderDetails } = require("../../../models/orderModal");

const yourOrder = async (req, res) => {

    try {
        console.log(req.params.id);
       let value =  await orderDetails.find();
       let data = value.filter((item)=>item.billerId === req.params.id)
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

module.exports = { yourOrder };
