const express = require('express');
const cruds = require('../Cruds/cruds');
const path = require("path");

const routes = (app)=>{

    app.use(express.static(path.join(__dirname, "../dist")));

    app.get("/test",(req,res)=>{
        res.send("Hello from home");
    })  
};

module.exports = {routes};