const BookingFlights = require("../models/BookingFlights");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const createReservation = (req, res) => {
    const bookingFlights = new BookingFlights({
        User_id: req.body.User_id,
        ReservationNumber: req.body.ReservationNumber,
        FlightNumber: req.body.FlightNumber,
        ChosenCabin: req.body.ChosenCabin,
        SeatsReserved: req.body.SeatsReserved,
        TotalReservationPrice: req.body.TotalReservationPrice,
        Type: req.body.Type,
        Otherflight: req.body.Otherflight
    });
    bookingFlights.save().then(result=>{
        res.send("created successfully");
    }).catch(err=>{
        console.log(err);
    });
}

const editSeats = (req,res)=>{
  //console.log(req.body);
  BookingFlights.findById(req.body.id).then((x)=>{BookingFlights.findByIdAndUpdate(req.body.id , {$set:{SeatsReserved:req.body.newArr}}).then(()=>{res.send("done")})});
}

const getAllReservations = (req,res) => {
    BookingFlights.find({User_id: req.params.User_id})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

const cancelReservation = (req, res) => {
    BookingFlights.findByIdAndRemove(req.params.id)
      .then((result) => {
        res.send("Flight deleted successfully");
        let transporter = nodemailer.createTransport({
          service: "Gmail",
          port: 465,
          secure: true, 
          auth: {
            user: "menstack46@gmail.com", 
            pass: process.env.Password, 
          },
        }); 
        let info = transporter.sendMail({
          from: '"MenStack" MenStack46@gmail.com',
          to: req.params.UserEmail,
          subject: "Cancelled Flight Reservation", 
          html: `<h3>Flight Number:</h3>
                 <p>${result.FlightNumber}</p>
                 <hr style="width:50%;text-align:left;margin-left:0">
                 <h3>Reservation Number:</h3>
                 <p>${result.ReservationNumber}</p>
                 <hr style="width:50%;text-align:left;margin-left:0">
                 <h3>Chosen Cabin:</h3>
                 <p>${result.ChosenCabin}</p>
                 <hr style="width:50%;text-align:left;margin-left:0">
                 <h3>Total amount refunded:</h3>
                 <p>${result.TotalReservationPrice}</p>`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
};

const sendItinerary = (req,res)=>{
    const state = req.body.state;
    const resNum = req.body.resNum;
        let transporter = nodemailer.createTransport({
          service: "Gmail",
          port: 465,
          secure: true, 
          auth: {
            user: "menstack46@gmail.com", 
            pass: process.env.Password, 
          },
        });
        let info = transporter.sendMail({
          from: '"MenStack" MenStack46@gmail.com',
          to: req.params.UserEmail,
          subject: "Flight Itinerary", 
          html: `<h3>Reservation Number:</h3>
                 <p>${resNum}</p>
                 <hr style="width:50%;text-align:left;margin-left:0">
                 <h3>Departure Flight:</h3>
                 <p>Flight Date: ${state.depFlight.Date}</p>
                 <p>Departure Time: ${state.depFlight.DepTime}</p>
                 <p>Arrival Time: ${state.depFlight.ArrTime}</p>
                 <p>Price per Seat: ${state.depFlight.Price}</p>
                 <p>Cabin Class: ${state.depFlight.cabin}</p>
                 <p>Choosen Seats: ${state.depSeatsReserved}</p> 
                 <hr style="width:50%;text-align:left;margin-left:0">
                 <h3>Return Flight:</h3>
                 <p>Flight Date: ${state.arrFlight.Date}</p>
                 <p>Departure Time: ${state.arrFlight.DepTime}</p>
                 <p>Arrival Time: ${state.arrFlight.ArrTime}</p>
                 <p>Price per Seat: ${state.arrFlight.Price}</p>
                 <p>Cabin Class: ${state.arrFlight.cabin}</p>
                 <p>Choosen Seats: ${state.arrSeatsReserved}</p>
                 <hr style="width:50%;text-align:left;margin-left:0">
                 <h3>Price:</h3>
                 <p>Departure Flight: ${state.depFlight.Price * state.noSeats}</p>
                 <p>Return Flight: ${state.arrFlight.Price * state.noSeats}</p>
                 <p>Total Price ${state.depFlight.Price * state.noSeats + state.arrFlight.Price * state.noSeats}</p>`
        });
        res.send("sent");
}

module.exports = {createReservation,getAllReservations,cancelReservation,sendItinerary,editSeats};