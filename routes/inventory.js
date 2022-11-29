const express = require("express");
const { AddBrand } = require("../controllers/admin/brand/AddBrand");
const { Brand } = require("../controllers/admin/brand/brand");
const { deleteBrand } = require("../controllers/admin/brand/deleteBrand");
const { editBrand } = require("../controllers/admin/brand/editBrand");
const { addCategory } = require("../controllers/admin/category/addCategory");
const { category } = require("../controllers/admin/category/category");
const { dashboardProducts } = require("../controllers/admin/dashboard/dashboardProduct");
const { deleteCategory } = require("../controllers/admin/category/deleteCategory");
const { editCategory } = require("../controllers/admin/category/editCategory");
const { addProduct } = require("../controllers/admin/product/addProduct");
const { deleteProduct } = require("../controllers/admin/product/deleteProduct");
const { editProducts } = require("../controllers/admin/product/editProduct");
const { products } = require("../controllers/admin/product/product");
const { dashboardOverview } = require("../controllers/admin/dashboard/dashboardOverview");
const { barChart } = require("../controllers/admin/dashboard/barChart");
const router = express.Router();




// Brand Route
router.post("/add-brand",AddBrand);
router.get("/brand",Brand);
router.put("/edit-brand/:id",editBrand);
router.delete("/delete-brand/:id",deleteBrand);

// Category Route
router.post("/add-category",addCategory);
router.get("/category",category);
router.put("/edit-category/:id",editCategory);
router.delete("/delete-category/:id",deleteCategory);


// Product Route
router.post("/add-product",addProduct);
router.get("/products",products);
router.put("/edit-product/:id",editProducts);
router.delete("/delete-product/:id",deleteProduct);

// DashBoard Route
router.get("/dashboard-products",dashboardProducts);
router.get("/dashboard-overview",dashboardOverview);
router.get("/dashboard-barChart/:id",barChart);





module.exports = router;
