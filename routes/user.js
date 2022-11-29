const express = require("express");
const { switchToUser } = require("../controllers/admin/user/switchToUser");
const { user } = require("../controllers/admin/user/users");
const { forgotPassword } = require("../controllers/auth/forgotPassword");
const { login } = require("../controllers/auth/Login");
const { passwordResetPage } = require("../controllers/auth/password-reset-page");
const  { register } = require("../controllers/auth/register");
const { profileDetail } = require("../controllers/user/order/profileUpdate/profileDetail");
const { profilePage } = require("../controllers/user/order/profileUpdate/profileUpdate");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();



// Authentication Route 
router.post("/register",register);
router.post("/login",login);
router.post("/forgot-password",forgotPassword);
router.post("/password-reset-page",authentication,passwordResetPage);



// user data update route
router.post("/profilePage/:id",profilePage);
router.get("/profileDetail/:id",profileDetail);

// User Route 
router.get("/user-details",user);
router.put("/change-user/:id",switchToUser)

module.exports = router;
