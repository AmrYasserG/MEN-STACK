const express = require('express');
const logUp = require('../Controller/logUp');
const loginRouter = express.Router();
loginRouter.use(express.json());
loginRouter.use(express.urlencoded({ extended: false }));

loginRouter.post("/login", logUp.loginUser); 

module.exports = loginRouter;