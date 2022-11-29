const { UserDetails } = require("../../../../models/userModel");

const profilePage = async (req, res) => {

    try {
        const { name, email, age, dateOfBirth, profileUrl } = req.body;
        const doc = await UserDetails.findById(req.params.id)
        doc.name = name;
        doc.email = email;
        doc.age = age;
        doc.dateOfBirth = dateOfBirth;
        doc.profileUrl = profileUrl;
        await doc.save();
        res.json({
            statusCode: 200,
            message: "Profile Update Successfully ",
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

module.exports = { profilePage }