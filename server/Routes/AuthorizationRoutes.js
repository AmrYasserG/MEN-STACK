const express = require("express");
const authorizationRouter = express.Router();
const authController = require("../Controller/authController");

authorizationRouter.get("/signup", authController.signup_get);
authorizationRouter.post("/signup", authController.signup_post);
authorizationRouter.get("/login", authController.login_get);
authorizationRouter.post("/login", authController.login_post);

module.exports = authorizationRouter;
