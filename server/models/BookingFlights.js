const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingFlightsSchema = new Schema(
  {
    User_id: {
      type: String,
      required: true,
    },
    ReservationNumber:{
      type: String,
      required: true,
    },
    FlightNumber: {
      type: String,
      required: true,
    },
    ChosenCabin: {
      type: String,
      required: true,
    },
    SeatsReserved: {
      type: [String],
      required: true,
    },
    TotalReservationPrice: {
      type: Number,
      required: true,
    },
    Type:{
      required : true,
      type: String,
    },
    Otherflight:{
      type: String,
      required:false
    }

  },
  { timestamps: true }
);

mongoose.models = {};
const BookingFlights = mongoose.model("BookingFlights", BookingFlightsSchema);
module.exports = BookingFlights;
