const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
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
  User.findById(req.params.id).then((cur) => {
    let { newPass, oldPass } = req.body;

    bcrypt
      .compare(oldPass, cur.Password)
      .then((auth) => {
        if (auth) {
          bcrypt.genSalt().then((salt) => {
            bcrypt.hash(newPass, salt).then((res2) => {
              User.findByIdAndUpdate(
                { _id: id },
                {
                  Password: res2,
                }
              )
                .then((result) => {
                  res.send(req.body);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          });
        } else {
          res.status(410);
          res.send("Wrong Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const login_post = (req, res) => {
  const { Email, Password } = req.body;
  User.findOne({ Email })
    .then((user) => {
      if (user) {
        bcrypt
          .compare(Password, user.Password)
          .then((auth) => {
            if (auth) {
              const token = createToken(user._id);

              res.send({
                user: user,
                authorization: token,
              });
            } else {
              res.status(413);
              res.send("Wrong PassWord");
            }
          })
          .catch((e) => {
            res.status(413);
            res.send("Wrong PassWord");
          });
      } else {
        res.status(408);
        res.send("Wrong Email");
      }
    })
    .catch((err) => {
      res.status(413);
      res.send("Wrong PassWord");
    });
};

const forget_Pass = (req, res) => {
  const { Email } = req.body;
  User.findOne({ Email })
    .then((user) => {
      if (user) {
        var randomPass = Math.random().toString(36).slice(-8);
        let id = user.id;
        bcrypt.genSalt().then((salt) => {
          bcrypt.hash(randomPass, salt).then((res2) => {
            User.findByIdAndUpdate(
              { _id: id },
              {
                Password: res2,
              }
            )
              .then((result) => {
                res.send(req.body);
                console.log(randomPass);
                let transporter = nodemailer.createTransport({
                  service: "Gmail",
                  port: 465,
                  secure: true,
                  auth: {
                    user: "MenStack46@gmail.com",
                    pass: process.env.Password,
                  },
                });
                let info = transporter.sendMail({
                  from: '"MenStack" MenStack46@gmail.com',
                  to: user.Email,
                  subject: "Your new Password",
                  html: `<p>Your new Password: ${randomPass}</p><p>Go to userprofile and change it</p>`,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      } else {
        res.status(477);
        res.send("Wrong Email");
      }
    })
    .catch((err) => {
      res.status(401);
      console.log(err);
    });
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = {
  signup_post,
  login_post,
  changePassword,
  forget_Pass,
  authenticateToken,
};
