const express = require("express");
const flightController = require("../Controller/flightController");
const flightRouter = express.Router();
const authController = require("../Controller/authController");

flightRouter.use(express.json());
flightRouter.use(express.urlencoded({ extended: false }));
flightRouter.get(
  "/getAllFlights",
  authController.authenticateToken,
  flightController.getAllFlights
);
flightRouter.post("/getAllFlightsWithId", flightController.getAllFlightsWithId);
flightRouter.post(
  "/searchFlights",
  authController.authenticateToken,
  flightController.searchFlights
);
flightRouter.post(
  "/searchFlightsToReserve",
  flightController.searchFlightsToReserve
);
flightRouter.post(
  "/createNewFlight",
  authController.authenticateToken,
  flightController.createNewFlight
);
flightRouter.delete(
  "/deleteFlight/:id",
  authController.authenticateToken,
  flightController.deleteFlight
);
flightRouter.put(
  "/editFlight/:id",
  authController.authenticateToken,
  flightController.updateFlightdetails
);
flightRouter.put(
  "/updateFlightAvailableSeats/:id",
  authController.authenticateToken,
  flightController.updateFlightAvailableSeats
);

module.exports = flightRouter;
