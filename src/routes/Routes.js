const { Router } = require("express");
const userRoutes = require("./user.Routes");

const routes = Router();

routes.use("/usuario", userRoutes);

module.exports = routes;
