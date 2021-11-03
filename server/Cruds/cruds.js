const User = require("../models/User");
const Flight = require("../models/Flight");

exports.addUser = (req, res) => {
  const user = new User({
    Name:'Omar Ashraf Wahbi',
    Email:'Omar.wahbi@gmail.com',
    Age:21,
    BornIn:'11/7/2000',
    LivesIn:'Cairo',
    MartialStatus:'Single',
    PhoneNumber:'01010198238',
    Job:'Student'
  });
  user
    .save()
    .then((result) => {
      res.send(result);
      console.log("added");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createNewFlight = (req, res) => {
  const flight = new Flight({
    FlightNumber:req.body.FlightNumber,
    From:req.body.From,
    To:req.body.To,
    ArrivalTime:new Date(req.body.ArrivalTime),
    DepartureTime:new Date(req.body.DepartureTime),
    EconomySeatsNo:req.body.EconomySeatsNo,
    BusinessSeatsNo:req.body.BusinessSeatsNo,
    FirstSeatsNo:req.body.FirstSeatsNo,
    AirportDeparture:req.body.AirportDeparture,
    AirportArrival:req.body.AirportArrival,
    Date:new Date(req.body.Date)
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

exports.getAllFlights = (req,res)=>{
  Flight.find().then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
}

