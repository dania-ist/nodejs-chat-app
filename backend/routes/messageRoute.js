const express = require("express");
const { getAllMessages, sendMessage } = require("../services/messageService");
const { auth } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(auth, getAllMessages);
router.route("/").post(auth, sendMessage);

module.exports = router;
