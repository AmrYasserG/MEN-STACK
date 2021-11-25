const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingFlightsSchema = new Schema(
  {
    User_id: {
      type: String,
      required: true,
    },
    Flight_id: {
      type: String,
      required: true,
    },
    EconomySeatsReserved: {
      type: Number,
      required: true,
    },
    BusinessSeatsReserved: {
      type: Number,
      required: true,
    },
    FirstSeatsReserved: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
const BookingFlights = mongoose.model("BookingFlights", BookingFlightsSchema);
module.exports = BookingFlights;
