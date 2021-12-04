const User = require("../models/User");

const addUser = (req, res) => {
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


const getInfo = (req, res) => {
  User.findById(req.params.id).then((result) => {
    res.send(result);
  });
};

const editUser = (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  User.findByIdAndUpdate({ _id: id }, req.body)
    .then((result) => {
      res.send(req.body);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getAllUsers = (req, res) => {
  User.find().then((result) => {
    res.send(result);
    console.log(result);
  });
};

module.exports = {
  addUser,
  getInfo,
  getAllUsers,
  editUser
};

