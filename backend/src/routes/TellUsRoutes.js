const express = require("express");
const { submitTellUsForm } = require("../controllers/TellUsController");

const router = express.Router();

router.post("/", submitTellUsForm);

module.exports = router;
