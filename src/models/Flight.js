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
  ArrivalTime: {
    type: String,
    required: true
  },
  Economyseatsno: {
    type: Number,
    required: true,
  },
  Businessclassseatsno: {
    type: Number,
    required: true
  },
  Airport: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
}, { timestamps: true });
mongoose.models = {}
const Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;