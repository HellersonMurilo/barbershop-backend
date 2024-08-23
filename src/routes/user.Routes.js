const { Router } = require("express");
const userController = require("../controller/userController");
const {
  validateUser,
  hashPassword,
  validatePassword,
} = require("../middleware/userMiddleware");

const userRoutes = Router();

userRoutes.post("/signup", validateUser, hashPassword, (req, res) => {
  userController.signUp(req, res);
});

userRoutes.post("/signin", validatePassword, (req, res) => {
  userController.signin(req, res);
});

module.exports = userRoutes;
