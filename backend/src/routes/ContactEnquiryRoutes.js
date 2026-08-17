const express = require("express");
const { submitContactEnquiry } = require("../controllers/ContactEnquiryController");

const router = express.Router();

router.post("/", submitContactEnquiry);

module.exports = router;
