const express = require('express');
const cruds = require('../Cruds/cruds');

const routes = (app)=>{
    app.get("/test",(req,res)=>{
        res.send("Hello from home");
    });
    app.get("/getAllFlights",cruds.getAllFlights)
    app.post("/addUser", cruds.addUser);  
    app.post("/createNewFlight", cruds.createNewFlight); 
    app.delete("/deleteFlight/:id",cruds.deleteFlight);
};

module.exports = {routes};