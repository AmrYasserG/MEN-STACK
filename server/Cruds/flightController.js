const Flight = require("../model/Flight");

const updateFlightdetails = (req, res) => {
  let id = req.params.id;
  console.log(req.params);
  Flight.findByIdAndUpdate({ _id: id }, req.body).then((result) => {
    res.send("DONE");
  });
};

module.exports = {
  updateFlightdetails,
};
