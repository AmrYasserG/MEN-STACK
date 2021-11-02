const express = require('express');
const cruds = require('../Cruds/cruds');

const routes = (app)=>{

    app.get("/test",(req,res)=>{
        res.send("Hello from home");
    });

    app.post("/addUser", cruds.addUser);  
    app.post("/createNewFlight", cruds.createNewFlight); 
};

module.exports = {routes};