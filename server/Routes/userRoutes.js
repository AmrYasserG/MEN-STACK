const express = require('express');
const userController = require('../Controller/userController');
const usersRouter = express.Router();
usersRouter.use(express.json());
usersRouter.use(express.urlencoded({ extended: false }));

usersRouter.post("/addUser", userController.addUser);  
usersRouter.get("/userInfo/:id",userController.getInfo);
usersRouter.get("/usersInfo",userController.getAllUsers);

module.exports = usersRouter;