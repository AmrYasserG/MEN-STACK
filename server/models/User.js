const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    Type: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    Age: {
      type: Number,
      required: true,
    },
    BornIn: {
      type: String,
      required: true,
    },
    LivesIn: {
      type: String,
      required: true,
    },
    MartialStatus: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
    PassportNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// userSchema.pre("save", (next) => {
//   bcrypt.genSalt().then((salt) => {
//     console.log(salt);
//     console.log(this.Password);
//     console.log(this);
//     bcrypt.hash(this.Password, salt).then((res) => {
//       this.Password = res;
//       next();
//     });
//   });
// });

const User = mongoose.model("User", userSchema);
module.exports = User;
