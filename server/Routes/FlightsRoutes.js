const express = require("express");
const flightController = require("../Cruds/flightController");
const flightRouter = express.Router();
flightRouter.use(express.json());
flightRouter.use(express.urlencoded({ extended: false }));

flightRouter.get("/getAllFlights", flightController.getAllFlights);
flightRouter.post("/createNewFlight", flightController.createNewFlight); 
flightRouter.delete("/deleteFlight/:id", flightController.deleteFlight);
flightRouter.put("/editFlight/:id", flightController.updateFlightdetails);

module.exports = flightRouter;
