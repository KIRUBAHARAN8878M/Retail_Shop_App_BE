const express = require("express");
const { viewOrder } = require("../controllers/admin/order/viewOrder");
const { invoice } = require("../controllers/user/order/invoice");
const { order } = require("../controllers/user/order/orderPage");
const { yourOrder } = require("../controllers/user/order/yourOrder");
const router = express.Router();


// order Route for user
router.post("/order",order);
router.get("/invoice/:id",invoice);

// View Order Route for admin
router.get("/view-order",viewOrder);

// yourOrder Route for user
router.get("/your-order/:id",yourOrder);


module.exports = router;