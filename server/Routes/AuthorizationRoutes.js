const express = require("express");
const authorizationRouter = express.Router();
const authController = require("../Controller/authController");

authorizationRouter.post("/signup", authController.signup_post);
authorizationRouter.post("/login", authController.login_post);
authorizationRouter.put(
  "/changePassword/:id",
  authController.authenticateToken,
  authController.changePassword
);
authorizationRouter.put("/forgetPass", authController.forget_Pass);

module.exports = authorizationRouter;
