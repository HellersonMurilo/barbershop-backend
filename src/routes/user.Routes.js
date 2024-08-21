const { Router } = require("express");
const userController = require("../controller/userController");
const { validateUser } = require("../middleware/userMiddleware");

const userRoutes = Router();

userRoutes.post("/criar", validateUser, (req, res) => {
  userController.createUser(req, res);
});

module.exports = userRoutes;
