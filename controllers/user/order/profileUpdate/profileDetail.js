const { UserDetails } = require("../../../../models/userModel");

const profileDetail = async (req, res) => {

    try {
      
        const data = await UserDetails.findById(req.params.id)
       
        res.json({
            statusCode: 200,
            message: "Profile Details Send Successfully ",
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

module.exports = { profileDetail }