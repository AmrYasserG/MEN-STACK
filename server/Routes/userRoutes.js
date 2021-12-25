const express = require("express");
const userController = require("../Controller/userController");
const usersRouter = express.Router();
usersRouter.use(express.json());
usersRouter.use(express.urlencoded({ extended: false }));
const authController = require("../Controller/authController");

usersRouter.post("/addUser", userController.addUser);
usersRouter.get(
  "/userInfo/:id",
  authController.authenticateToken,
  userController.getInfo
);
usersRouter.get("/usersInfo", userController.getAllUsers);
usersRouter.put(
  "/editUser/:id",
  authController.authenticateToken,
  userController.editUser
);
module.exports = usersRouter;
