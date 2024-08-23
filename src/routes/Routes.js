const { Router } = require("express");
const userRoutes = require("./user.Routes");

const routes = Router();

routes.use("/user", userRoutes);

module.exports = routes;
