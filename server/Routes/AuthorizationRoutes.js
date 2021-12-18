const express = require("express");
const authorizationRouter = express.Router();
const authController = require("../Controller/authController");

authorizationRouter.post("/signup", authController.signup_post);
authorizationRouter.post("/login", authController.login_post);

module.exports = authorizationRouter;
