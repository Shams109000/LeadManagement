const express = require("express");

const router = express.Router();

const { loginAdmin,createAdmin } = require("../controllers/temp");

router.post("/login", loginAdmin);
// TEMPORARY - DELETE AFTER CREATING ADMIN
// router.post("/register", createAdmin);
module.exports = router;