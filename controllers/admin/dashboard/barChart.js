const { orderDetails } = require("../../../models/orderModal");

const barChart = async (req, res) => {
    try {
        let month = {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
        };

        const value = await orderDetails.find();
        let data = value.filter(
            (item, index) => item.customer.orderDate.split(".")[2] == req.params.id
        );

        data.forEach((item, index) => {
            let m = item.customer.orderDate.split(".")[1];

            if (m == 01) {
                month.january = Number(month.january) + Number(item.payment.Total);
            } else if (m == 02) {
                month.february = Number(month.february) + Number(item.payment.Total);
            } else if (m == 03) {
                month.march = Number(month.march) + Number(item.payment.Total);
            } else if (m == 04) {
                month.april = Number(month.april) + Number(item.payment.Total);
            } else if (m == 05) {
                month.may = Number(month.may) + Number(item.payment.Total);
            } else if (m == 06) {
                month.june = Number(month.june) + Number(item.payment.Total);
            } else if (m == 07) {
                month.july = Number(month.july) + Number(item.payment.Total);
            } else if (m == 08) {
                month.august = Number(month.august) + Number(item.payment.Total);
            } else if (m == 09) {
                month.september = Number(month.september) + Number(item.payment.Total);
            } else if (m == 10) {
                month.october = Number(month.october) + Number(item.payment.Total);
            } else if (m == 11) {
                month.november = Number(month.november) + Number(item.payment.Total);
            } else {
                month.december = Number(month.december) + Number(item.payment.Total);
            }
        });

        res.json({
            statusCode: 200,
            month,
        });
    } catch (error) {
        res.json({
            error,
            message: "Server Side Error",
            statusCode: 500,
        });
    }
};

module.exports = { barChart };
