const express = require("express");
const bookingFlightsController = require("../Controller/bookingFlightsController");
const BookingFlightsRouter = express.Router();
BookingFlightsRouter.use(express.json());
BookingFlightsRouter.use(express.urlencoded({ extended: false }));

BookingFlightsRouter.post("/createReservation",bookingFlightsController.createReservation);
BookingFlightsRouter.get("/getAllReservations/:User_id",bookingFlightsController.getAllReservations);
BookingFlightsRouter.delete("/cancelReservation/:id/:UserEmail", bookingFlightsController.cancelReservation);
BookingFlightsRouter.post("/sendItinerary/:UserEmail", bookingFlightsController.sendItinerary);
BookingFlightsRouter.put("/editSeats", bookingFlightsController.editSeats);

module.exports = BookingFlightsRouter;