const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.log(`connection string: ${process.env.MONGO_URL}`);
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
