const Flight = require("../models/Flight");

const createNewFlight = (req, res) => {
  const flight = new Flight({
    FlightNumber:req.body.FlightNumber,
    From:req.body.From,
    To:req.body.To,
    ArrivalTime:req.body.ArrivalTime,
    DepartureTime:req.body.DepartureTime,
    EconomySeatsNo:req.body.EconomySeatsNo,
    BusinessSeatsNo:req.body.BusinessSeatsNo,
    FirstSeatsNo:req.body.FirstSeatsNo,
    AirportDepartureTerminal:req.body.AirportDepartureTerminal,
    AirportArrivalTerminal:req.body.AirportArrivalTerminal,
    Date: req.body.Date
  });
  flight
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const searchFlights = (req, res) => {
  Flight.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllFlights = (req, res) => {
  Flight.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteFlight = (req, res) => {
  Flight.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.send("Flight deleted successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateFlightdetails = (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  Flight.findByIdAndUpdate({ _id: id }, req.body).then((result) => {
    res.send("Updated Successfully");
  });
};

module.exports = {
  createNewFlight,
  searchFlights,
  getAllFlights,
  deleteFlight,
  updateFlightdetails,
};
