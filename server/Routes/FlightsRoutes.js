const express = require("express");
const flightController = require("../Cruds/flightController");
const flightRouter = express.Router();
flightRouter.use(express.json());
flightRouter.use(express.urlencoded({ extended: false }));

flightRouter.put("/editFlight", flightController.updateFlightdetails);

module.exports = flightRouter;
