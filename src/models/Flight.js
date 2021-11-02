const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  Number: {
    type: Number,
    required: true,
  },
  Departure: {
    type: String,
    required: true,
  },
  Arrival: {
    type: String,
    required: true,
  },
  ArrivalTime: {
    type: Date,
    required: false
  },
  DepartureTime: {
    type: Date,
    required: false
  },
  Economyseatsno: {
    type: Number,
    required: true,
  },
  Businessclassseatsno: {
    type: Number,
    required: true
  },
  Firstclassseatsno: {
    type: Number,
    required: true
  },
  AirportDeparture: {
    type: String,
    required: true
  },
  AirportArrival: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: false
  },
}, { timestamps: true });
mongoose.models = {}
const Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;