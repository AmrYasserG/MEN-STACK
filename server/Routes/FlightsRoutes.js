const express = require("express");
const flightController = require("../Controller/flightController");
const flightRouter = express.Router();
flightRouter.use(express.json());
flightRouter.use(express.urlencoded({ extended: false }));

flightRouter.get("/getAllFlights", flightController.getAllFlights);
flightRouter.post("/getAllFlightsWithId", flightController.getAllFlightsWithId);
flightRouter.post("/searchFlights", flightController.searchFlights);
flightRouter.post("/searchFlights2", flightController.searchFlights2);
flightRouter.post("/createNewFlight", flightController.createNewFlight);
flightRouter.delete("/deleteFlight/:id", flightController.deleteFlight);
flightRouter.put("/editFlight/:id", flightController.updateFlightdetails);
flightRouter.put("/updateFlightAvailableSeats/:id", flightController.updateFlightAvailableSeats);

module.exports = flightRouter;
