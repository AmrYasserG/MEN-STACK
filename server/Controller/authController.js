const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { Email: "", Password: "" };

  // duplicate email error
  if (err.code === 11000) {
    console.log("BALABIZOOOOOOOOOOOOOOOOOOOOOO");
    errors.Email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// controller actions

const signup_post = (req, res) => {
  let {
    FirstName,
    LastName,
    Email,
    Age,
    BornIn,
    LivesIn,
    MartialStatus,
    PhoneNumber,
    PassportNumber,
    Password,
  } = req.body;
  console.log(req.body);

  console.log("BALABIZOOOOOOOOOOOOOOOOOOOOOOOOOOO3");

  bcrypt.genSalt().then((salt) => {
    bcrypt.hash(Password, salt).then((res2) => {
      console.log("BALABIZOOOOOOOOOOOOOOOOOOOOOOOOOOO4 ");

      User.create({
        FirstName,
        LastName,
        Email,
        Age,
        BornIn,
        LivesIn,
        MartialStatus,
        PhoneNumber,
        PassportNumber,
        Password: res2,
        Type: "user",
      })
        .then((user) => {
          res.status(201);
          res.send(user);
        })
        .catch((err) => {
          console.log("BALABIZOOOOOOOOOOOOOOOOOOOOOOOOOOO2");
          const errors = handleErrors(err);
          res.status(400);
          res.send({ errors });
        });
    });
  });
};
const changePassword = (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  let { Password } = req.body;
  bcrypt.genSalt().then((salt) => {
    bcrypt.hash(Password, salt).then((res2) => {
      User.findByIdAndUpdate({ _id: id },{
        Password: res2
      })
        .then((result) => {
          res.send(req.body);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};

const login_post = (req, res) => {
  const { Email, Password } = req.body;
  try {
    User.findOne({ Email }).then((user) => {
      if (user) {
        bcrypt.compare(Password, user.Password).then((auth) => {
          if (auth) {
            const token = createToken(user._id);

            res.send({
              user: user,
              authorization: token,
            });
          } else res.send("Wrong PassWord");
        });
      } else res.send("Wrong Email");
    });
  } catch (err) {
    res.status(400).json({});
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = {
  signup_post,
  login_post,
  changePassword,
};
