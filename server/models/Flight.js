const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema(
  {
    FlightNumber: {
      unique: true,
      type: String,
      required: true,
    },
    From: {
      type: String,
      required: true,
    },
    To: {
      type: String,
      required: true,
    },
    ArrivalTime: {
      type: String,
      required: true,
    },
    DepartureTime: {
      type: String,
      required: true,
    },
    EconomySeatsNo: {
      type: Number,
      required: true,
    },
    BusinessSeatsNo: {
      type: Number,
      required: true,
    },
    FirstSeatsNo: {
      type: Number,
      required: true,
    },
    EconomyAvailableSeatsNo: {
      type: Number,
      required: true,
    },
    BusinessAvailableSeatsNo: {
      type: Number,
      required: true,
    },
    FirstAvailableSeatsNo: {
      type: Number,
      required: true,
    },
    EconomySeats: {
      type: Map,
      of: Boolean,
      required: false,
    },
    BusinessSeats: {
      type: Map,
      of: Boolean,
      required: false,
    },
    FirstSeats: {
      type: Map,
      of: Boolean,
      required: false,
    },
    FirstClassPrice: {
      type: Number,
      required: true,
    },
    BusinessClassPrice: {
      type: Number,
      required: true,
    },
    EconomyClassPrice: {
      type: Number,
      required: true,
    },
    AirportDepartureTerminal: {
      type: Number,
      required: false,
    },
    AirportArrivalTerminal: {
      type: Number,
      required: false,
    },
    Date: {
      type: String,
      required: true,
    },
    BaggageAllowance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
const Flight = mongoose.model("Flight", FlightSchema);
module.exports = Flight;
