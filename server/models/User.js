const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: false,
    },
    LastName: {
      type: String,
      required: false,
    },
    Email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
<<<<<<< HEAD
    Type: {
      type: String,
      required: true,
=======
    Type:{
      type:String,
      required : false
>>>>>>> 009423481e6079ab2adba80af9ab573b6f157bcf
    },
    Password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum password length is 6 characters"],
    },
    Age: {
      type: Number,
      required: true,
    },
    BornIn: {
      type: String,
      required: false,
    },
    LivesIn: {
      type: String,
      required: false,
    },
    MartialStatus: {
      type: String,
      required: false,
    },
    PhoneNumber: {
      type: String,
      required: false,
    },
    PassportNumber: {
      type: String,
      required: false,
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
