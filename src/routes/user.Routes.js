const { Router } = require("express");
const userController = require("../controller/userController");
const { validateUser, hashPassword } = require("../middleware/userMiddleware");

const userRoutes = Router();

userRoutes.post("/signup", validateUser, hashPassword, (req, res) => {
  userController.signUp(req, res);
});

module.exports = userRoutes;
