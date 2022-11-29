const { UserDetails } = require("../../../models/userModel");

const user = async (req, res) => {

    try {
        const data = await UserDetails.find()
        res.json({
            statusCode: 200,
            message: "User Details Send Successfully ",
            data,
        })
    } catch (error) {
        console.log(error);
        res.json({
            statusCode: 500,
            message: "Internal Server Error",
            error
        })
    }
}

module.exports = { user }