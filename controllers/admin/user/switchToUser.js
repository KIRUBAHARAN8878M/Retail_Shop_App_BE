const { UserDetails } = require("../../../models/userModel");

const switchToUser = async (req, res) => {

    try {

        const { e } = req.body
        const doc = await UserDetails.findById(req.params.id)
        if(doc.email == "kirubam8878@gmail.com"){
            res.json({
                statusCode: 401,
                message: "Default Admin Account, So Roll Does Not Update ",
            })
        }else{
            doc.isAdmin = e;
            await doc.save();
            res.json({
                statusCode: 200,
                message: "Roll Update Successfully ",
            })
        }
       
    } catch (error) {
        console.log(error);
        res.json({
            statusCode: 500,
            message: "Internal Server Error",
            error
        })
    }
}

module.exports = { switchToUser }