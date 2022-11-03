const express = require("express");
const {
  createChat,
  getAllChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../services/chatService");
const { auth } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(auth, createChat);
router.route("/").get(auth, getAllChats);
router.route("/group").post(auth, createGroupChat);
router.route("/rename").put(auth, renameGroup);
router.route("/groupremove").put(auth, removeFromGroup);
router.route("/groupadd").put(auth, addToGroup);

module.exports = router;
