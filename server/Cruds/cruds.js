const User = require("../../src/Models/User");

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

const Flight = require("../../src/Models/Flight");

exports.createNewFlight = (req, res) => {
  const flight = new Flight({
    Number:req.body.Number,
    Departure:req.body.Departure,
    Arrival:req.body.Arrival,
    ArrivalTime:new Date("2020-05-15"),
    DepartureTime:new Date("2020-05-15"),
    Economyseatsno:req.body.Economyseatsno,
    Businessclassseatsno:req.body.Businessclassseatsno,
    Firstclassseatsno:req.body.Firstclassseatsno,
    AirportDeparture:req.body.AirportDeparture,
    AirportArrival:req.body.AirportArrival,
    Date:new Date("2020-05-15")
  });
  flight
    .save()
    .then((result) => {
      res.send(result);
      console.log("added");
    })
    .catch((err) => {
      console.log(req.body);
      console.log(err);
    });
};