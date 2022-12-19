const express = require("express");
const router = express.Router();
const { addMessage, getMessages } = require("../controllers/message");
const { authAdmin } = require("../middleware/authAdmin");

router.get("/", authAdmin, getMessages);
router.post("/", addMessage);
module.exports = router;
