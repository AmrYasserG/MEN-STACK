const express = require('express');
const logUp = require('../Controller/logUp');
const registerRouter = express.Router();
registerRouter.use(express.json());
registerRouter.use(express.urlencoded({ extended: false }));

registerRouter.post("/register", logUp.addUser); 

module.exports = registerRouter;