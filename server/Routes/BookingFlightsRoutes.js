const express = require("express");
const bookingFlightsController = require("../Controller/bookingFlightsController");
const BookingFlightsRouter = express.Router();
BookingFlightsRouter.use(express.json());
BookingFlightsRouter.use(express.urlencoded({ extended: false }));



module.exports = BookingFlightsRouter;