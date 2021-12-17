const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { Email: "", Password: "" };

  // duplicate email error
  if (err.code === 11000) {
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
const signup_get = (req, res) => {
  res.render("signup");
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_post = (req, res) => {
  let { Email, Password } = req.body;
  console.log(req.body);
  try {
    bcrypt.genSalt().then((salt) => {
      console.log(salt);
      bcrypt.hash(Password, salt).then((res2) => {
        User.create({ Email, Password: res2 }).then((user) => {
          res.status(201).json(user);
        });
      });
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const login_post = (req, res) => {
  const { Email, Password } = req.body;
  try {
    User.findOne({ Email }).then((user) => {
      if (user) {
        console.log(user);
        console.log(req.body);
        bcrypt.compare(Password, user.Password).then((auth) => {
          if (auth) {
            const token = createToken(user._id);
            res.send({
              user: user,
              Access_Token: `Bearer ${token}`,
            });
          }
          res.send("Wrong PassWord");
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
  signup_get,
  login_get,
  signup_post,
  login_post,
};
