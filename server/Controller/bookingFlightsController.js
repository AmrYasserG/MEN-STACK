const BookingFlights = require("../models/BookingFlights");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const createReservation = (req, res) => {
    const bookingFlights = new BookingFlights({
        User_id: req.body.User_id,
        FlightNumber: req.body.FlightNumber,
        ChosenCabin: req.body.ChosenCabin,
        SeatsReserved: req.body.SeatsReserved,
        TotalReservationPrice: req.body.TotalReservationPrice,
    });
    bookingFlights.save().then(result=>{
        res.send("created successfully");
    }).catch(err=>{
        console.log(err);
    });
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
            user: "MenStack46@gmail.com", 
            pass: process.env.Password, 
          },
        });
        let info = transporter.sendMail({
          from: '"MenStack" MenStack46@gmail.com',
          to: req.params.UserEmail,
          subject: "Cancelled Flight Reservation", 
          html: `<p>Flight Number: ${result.FlightNumber}</p><p>Chosen Cabin: ${result.ChosenCabin}</p><p>Total amount refunded: ${result.TotalReservationPrice}</p>`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
};

module.exports = {createReservation,getAllReservations,cancelReservation};