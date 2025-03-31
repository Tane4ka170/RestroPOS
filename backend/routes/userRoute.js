const express = require("express");
const {
  register,
  login,
  getUserData,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(getUserData);

module.exports = router;
