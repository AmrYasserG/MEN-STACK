const Flight = require("../models/Flight");
const fillMap = (map, n, c) => {
  for (let i = 1; i <= n / c.length; i++) {
    for (let j = 0; j < c.length; j++) {
      map.set(c[j] + i, true);
    }
  }
  for (let i = 1; i <= n % c.length; i++) {
    map.set(c[i - 1] + (parseInt(n / c.length) + 1), true);
  }
};
const getDuration = (y1, t1, y2, t2) => {
  let departureDate = y1.split("-");
  let departureTime = t1.split(":");
  let arrivalDate = y2.split("-");
  let arrivalTime = t2.split(":");
  let d1 = new Date(
    parseInt(departureDate[0]),
    parseInt(departureDate[1]),
    parseInt(departureDate[2]),
    parseInt(departureTime[0]),
    parseInt(departureTime[1])
  );
  let d2 = new Date(
    parseInt(arrivalDate[0]),
    parseInt(arrivalDate[1]),
    parseInt(arrivalDate[2]),
    parseInt(arrivalTime[0]),
    parseInt(arrivalTime[1])
  );
  let n = (d2 - d1) / 1000 / 60;
  return `${parseInt(n / 60)} h, ${n % 60} min`;
};
const createNewFlight = (req, res) => {
  console.log(req.body);
  console.log(
    getDuration(
      req.body.Date,
      req.body.DepartureTime,
      req.body.ArrivalDate,
      req.body.ArrivalTime
    )
  );
  Flight.exists({ FlightNumber: req.body.FlightNumber })
    .then((result) => {
      if (!result) {
        if (req.body.twoWay) {
          Flight.exists({ FlightNumber: req.body.ReturnFlightNumber }).then(
            (result) => {
              if (!result) {
                let fmap = new Map();
                fillMap(fmap, req.body.FirstSeatsNo, ["W", "X", "Y", "Z"]);
                let bmap = new Map();
                fillMap(bmap, req.body.BusinessSeatsNo, [
                  "M",
                  "N",
                  "O",
                  "P",
                  "Q",
                  "R",
                ]);
                let emap = new Map();
                fillMap(emap, req.body.EconomySeatsNo, [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                ]);

                const flight = new Flight({
                  FlightNumber: req.body.FlightNumber,
                  From: req.body.From,
                  To: req.body.To,
                  Date: req.body.Date,
                  ArrivalDate: req.body.ArrivalDate,
                  DepartureTime: req.body.DepartureTime,
                  ArrivalTime: req.body.ArrivalTime,
                  EconomySeatsNo: req.body.EconomySeatsNo,
                  BusinessSeatsNo: req.body.BusinessSeatsNo,
                  FirstSeatsNo: req.body.FirstSeatsNo,
                  EconomyAvailableSeatsNo: req.body.EconomySeatsNo,
                  BusinessAvailableSeatsNo: req.body.BusinessSeatsNo,
                  FirstAvailableSeatsNo: req.body.FirstSeatsNo,
                  EconomySeats: emap,
                  BusinessSeats: bmap,
                  FirstSeats: fmap,
                  AirportDepartureTerminal: req.body.AirportDepartureTerminal,
                  AirportArrivalTerminal: req.body.AirportArrivalTerminal,
                  BaggageAllowance: req.body.BaggageAllowance,
                  FirstClassPrice: req.body.FirstClassPrice,
                  BusinessClassPrice: req.body.BusinessClassPrice,
                  EconomyClassPrice: req.body.EconomyClassPrice,
                  TripDuration: getDuration(
                    req.body.Date,
                    req.body.DepartureTime,
                    req.body.ArrivalDate,
                    req.body.ArrivalTime
                  ),
                });
                flight
                  .save()
                  .then((result) => {
                    let frmap = new Map();
                    fillMap(frmap, req.body.FirstSeatsNo, ["W", "X", "Y", "Z"]);
                    let brmap = new Map();
                    fillMap(brmap, req.body.BusinessSeatsNo, [
                      "M",
                      "N",
                      "O",
                      "P",
                      "Q",
                      "R",
                    ]);
                    let ermap = new Map();
                    fillMap(ermap, req.body.EconomySeatsNo, [
                      "A",
                      "B",
                      "C",
                      "D",
                      "E",
                      "F",
                    ]);

                    const flightReturn = new Flight({
                      FlightNumber: req.body.ReturnFlightNumber,
                      From: req.body.To,
                      To: req.body.From,
                      Date: req.body.ReturnDate,
                      ArrivalDate: req.body.ReturnArrivalDate,
                      DepartureTime: req.body.ReturnDepartureTime,
                      ArrivalTime: req.body.ReturnArrivalTime,
                      EconomySeatsNo: req.body.ReturnEconomySeatsNo,
                      BusinessSeatsNo: req.body.ReturnBusinessSeatsNo,
                      FirstSeatsNo: req.body.ReturnFirstSeatsNo,
                      EconomyAvailableSeatsNo: req.body.ReturnEconomySeatsNo,
                      BusinessAvailableSeatsNo: req.body.ReturnBusinessSeatsNo,
                      FirstAvailableSeatsNo: req.body.ReturnFirstSeatsNo,
                      EconomySeats: ermap,
                      BusinessSeats: brmap,
                      FirstSeats: frmap,
                      AirportDepartureTerminal:
                        req.body.ReturnAirportDepartureTerminal,
                      AirportArrivalTerminal:
                        req.body.ReturnAirportArrivalTerminal,
                      BaggageAllowance: req.body.ReturnBaggageAllowance,
                      FirstClassPrice: req.body.ReturnFirstClassPrice,
                      BusinessClassPrice: req.body.ReturnBusinessClassPrice,
                      EconomyClassPrice: req.body.ReturnEconomyClassPrice,
                      TripDuration: getDuration(
                        req.body.ReturnDate,
                        req.body.ReturnDepartureTime,
                        req.body.ReturnArrivalDate,
                        req.body.ReturnArrivalTime
                      ),
                    });
                    flightReturn
                      .save()
                      .then((result2) => {
                        res.send({ result, result2 });
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                res.send("Ba3lol");
              }
            }
          );
        } else {
          let fmap = new Map();
          fillMap(fmap, req.body.FirstSeatsNo, ["W", "X", "Y", "Z"]);
          let bmap = new Map();
          fillMap(bmap, req.body.BusinessSeatsNo, [
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
          ]);
          let emap = new Map();
          fillMap(emap, req.body.EconomySeatsNo, [
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
          ]);

          const flight = new Flight({
            FlightNumber: req.body.FlightNumber,
            From: req.body.From,
            To: req.body.To,
            Date: req.body.Date,
            ArrivalDate: req.body.ArrivalDate,
            DepartureTime: req.body.DepartureTime,
            ArrivalTime: req.body.ArrivalTime,
            EconomySeatsNo: req.body.EconomySeatsNo,
            BusinessSeatsNo: req.body.BusinessSeatsNo,
            FirstSeatsNo: req.body.FirstSeatsNo,
            EconomyAvailableSeatsNo: req.body.EconomySeatsNo,
            BusinessAvailableSeatsNo: req.body.BusinessSeatsNo,
            FirstAvailableSeatsNo: req.body.FirstSeatsNo,
            EconomySeats: emap,
            BusinessSeats: bmap,
            FirstSeats: fmap,
            AirportDepartureTerminal: req.body.AirportDepartureTerminal,
            AirportArrivalTerminal: req.body.AirportArrivalTerminal,
            BaggageAllowance: req.body.BaggageAllowance,
            FirstClassPrice: req.body.FirstClassPrice,
            BusinessClassPrice: req.body.BusinessClassPrice,
            EconomyClassPrice: req.body.EconomyClassPrice,
            TripDuration: getDuration(
              req.body.Date,
              req.body.DepartureTime,
              req.body.ArrivalDate,
              req.body.ArrivalTime
            ),
          });
          flight
            .save()
            .then((result) => {
              res.send(result);
            })
            .catch((err) => {
              console.log(err);
              res.send("Balabizo");
            });
        }
      } else {
        res.send("Balabizo");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const searchFlightsToReserve = (req, res) => {
  let arr = [];
  arr.push({ From: req.body.From });
  arr.push({ To: req.body.To });
  arr.push({ Date: req.body.Date });
  console.log(req.body.Date);
  switch (req.body.Class) {
    case "Business Class": {
      arr.push({ BusinessAvailableSeatsNo: { $gte: Number(req.body.SeatNo) } });
      break;
    }
    case "First Class": {
      arr.push({ FirstAvailableSeatsNo: { $gte: Number(req.body.SeatNo) } });
      break;
    }
    case "Economy Class": {
      arr.push({ EconomyAvailableSeatsNo: { $gte: Number(req.body.SeatNo) } });
      break;
    }
    default:
      break;
  }
  Flight.find({ $and: arr })
    .then((result) => {
      console.log("result");

      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const searchFlights = (req, res) => {
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
  if (req.body.ArrivalDate) arr = { ...arr, ArrivalDate: req.body.ArrivalDate };
  if (req.body.FirstClassPrice)
    arr = { ...arr, FirstClassPrice: req.body.FirstClassPrice };
  if (req.body.BusinessClassPrice)
    arr = { ...arr, BusinessClassPrice: req.body.BusinessClassPrice };
  if (req.body.EconomyClassPrice)
    arr = { ...arr, EconomyClassPrice: req.body.EconomyClassPrice };
  if (req.body.BaggageAllowance)
    arr = { ...arr, BaggageAllowance: req.body.BaggageAllowance };

  console.log(arr);

  Flight.find(arr)
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

const getAllFlightsWithId = (req, res) => {
  Flight.find({ $or: req.body })
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
  Flight.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
      TripDuration: getDuration(
        req.body.Date,
        req.body.DepartureTime,
        req.body.ArrivalDate,
        req.body.ArrivalTime
      ),
    }
  )
    .then((result) => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(411);
        res.send("Duplicate FNO");
      }
    });
};

const updateFlightAvailableSeats = (req, res) => {
  Flight.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  )
    .then((result) => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createNewFlight,
  searchFlights,
  searchFlightsToReserve,
  getAllFlights,
  getAllFlightsWithId,
  deleteFlight,
  updateFlightdetails,
  updateFlightAvailableSeats,
};
