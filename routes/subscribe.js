const express = require("express");
const router = express.Router();
const { addSubscriber, getSubscribers } = require("../controllers/subscribe");
const { authAdmin } = require("../middleware/authAdmin");

router.get("/", authAdmin, getSubscribers);
router.post("/", addSubscriber);
module.exports = router;
