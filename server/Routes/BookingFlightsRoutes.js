const express = require("express");
const bookingFlightsController = require("../Controller/bookingFlightsController");
const BookingFlightsRouter = express.Router();
BookingFlightsRouter.use(express.json());
BookingFlightsRouter.use(express.urlencoded({ extended: false }));

//delete this before final merge
BookingFlightsRouter.post("/createReservation",bookingFlightsController.createReservation);

BookingFlightsRouter.get("/getAllReservations/:User_id",bookingFlightsController.getAllReservations);
BookingFlightsRouter.delete("/cancelReservation/:id", bookingFlightsController.cancelReservation);

module.exports = BookingFlightsRouter;