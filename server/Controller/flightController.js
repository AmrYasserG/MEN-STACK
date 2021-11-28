const Flight = require("../models/Flight");

const createNewFlight = (req, res) => {
  const flight = new Flight({
    FlightNumber: req.body.FlightNumber,
    From: req.body.From,
    To: req.body.To,
    ArrivalTime: req.body.ArrivalTime,
    DepartureTime: req.body.DepartureTime,
    EconomySeatsNo: req.body.EconomySeatsNo,
    BusinessSeatsNo: req.body.BusinessSeatsNo,
    FirstSeatsNo: req.body.FirstSeatsNo,
    EconomySeats: new Map(req.body.EconomySeats),
    BusinessSeats: new Map(req.body.BusinessSeats),
    FirstSeats: new Map(req.body.FirstSeats),
    AirportDepartureTerminal: req.body.AirportDepartureTerminal,
    AirportArrivalTerminal: req.body.AirportArrivalTerminal,
    Date: req.body.Date,
    BaggageAllowance: req.body.BaggageAllowance,
    FirstClassPrice: req.body.FirstClassPrice,
    BusinessClassPrice: req.body.BusinessClassPrice,
    EconomyClassPrice: req.body.EconomyClassPrice,
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
  let arr = [];

  if (req.body.FlightNumber != "")
    arr.push({ FlightNumber: JSON.parse(req.body.FlightNumber) });
  if (req.body.From != "") arr.push({ From: req.body.From });
  if (req.body.To != "") arr.push({ To: req.body.To });
  if (req.body.ArrivalTime != "")
    arr.push({ ArrivalTime: req.body.ArrivalTime });
  if (req.body.DepartureTime != "")
    arr.push({ DepartureTime: req.body.DepartureTime });
  if (req.body.EconomySeatsNo != "")
    arr.push({ EconomySeatsNo: req.body.EconomySeatsNo });
  if (req.body.BusinessSeatsNo != "")
    arr.push({ BusinessSeatsNo: req.body.BusinessSeatsNo });
  if (req.body.FirstSeatsNo != "")
    arr.push({ FirstSeatsNo: req.body.FirstSeatsNo });
  if (req.body.AirportDepartureTerminal != "")
    arr.push({ AirportDepartureTerminal: req.body.AirportDepartureTerminal });
  if (req.body.AirportArrivalTerminal != "")
    arr.push({ AirportArrivalTerminal: req.body.AirportArrivalTerminal });
  if (req.body.Date != "") arr.push({ Date: req.body.Date });
  Flight.find({ $and: arr })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const searchFlights2 = (req, res) => {
  let arr = {};
  console.log(req.body);
  if (req.body.FlightNumber)
    arr = { ...arr, FlightNumber: req.body.FlightNumber };
  if (req.body.From) arr = { ...arr, From: req.body.From };
  if (req.body.To) arr = { ...arr, To: req.body.To };
  if (req.body.ArrivalTime) arr = { ...arr, ArrivalTime: req.body.ArrivalTime };
  if (req.body.DepartureTime)
    arr = { ...arr, DepartureTime: req.body.DepartureTime };
  if (req.body.EconomySeatsNo)
    arr = { ...arr, EconomySeatsNo: req.body.EconomySeatsNo };
  if (req.body.BusinessSeatsNo)
    arr = { ...arr, BusinessSeatsNo: req.body.BusinessSeatsNo };
  if (req.body.FirstSeatsNo)
    arr = { ...arr, FirstSeatsNo: req.body.FirstSeatsNo };
  if (req.body.AirportDepartureTerminal)
    arr = {
      ...arr,
      AirportDepartureTerminal: req.body.AirportDepartureTerminal,
    };
  if (req.body.AirportArrivalTerminal)
    arr = { ...arr, AirportArrivalTerminal: req.body.AirportArrivalTerminal };
  if (req.body.Date) arr = { ...arr, Date: req.body.Date };

  console.log(arr);

  Flight.find(arr)
    .then((result) => {
      console.log(result);
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
  searchFlights2,
  getAllFlights,
  deleteFlight,
  updateFlightdetails,
};
