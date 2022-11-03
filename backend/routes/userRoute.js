const express = require("express");
const { auth } = require("../middleware/authMiddleware");

const { signup, login, getAllUsers } = require("../services/userService");

const router = express.Router();

router.route("/").get(auth, getAllUsers).post(signup);
router.post("/login", login);

module.exports = router;
