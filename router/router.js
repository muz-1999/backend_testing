const { newCustomer } = require("../controller/controller");
const express = require("express");
const router = express.Router();
router.post('/customernew',newCustomer);
module.exports = router;