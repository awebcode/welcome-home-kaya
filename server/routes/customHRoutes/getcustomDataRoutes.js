const express = require("express");
const router = express.Router();

const { isAuthenticatedUser } = require("../../utils/auth");
const { getFilterdCustomeData } = require("../../controllers/customeHouse/CustomeGetData");

router.get("/get/customHouseData/:menuType/:subValue", getFilterdCustomeData);

module.exports = router;