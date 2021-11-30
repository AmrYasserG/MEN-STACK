const User = require("../models/User");

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




