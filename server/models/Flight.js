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
      required: false,
    },
    DepartureTime: {
      type: String,
      required: false,
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
    EconomySeats: {
      type: Map,
      of: Boolean,
      required: true,
    },
    BusinessSeats: {
      type: Map,
      of: Boolean,
      required: true,
    },
    FirstSeats: {
      type: Map,
      of: Boolean,
      required: true,
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
      required: true,
    },
    AirportArrivalTerminal: {
      type: Number,
      required: true,
    },
    Date: {
      type: String,
      required: false,
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
