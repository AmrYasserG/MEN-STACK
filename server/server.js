const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Port = process.env.Port || 3005;
const cors = require("cors");
const bodyParser = require("body-parser");
const flightsRouter = require("./Routes/FlightsRoutes");
const bookingFlightsRouter = require("./Routes/BookingFlightsRoutes");
const usersRouter = require("./Routes/userRoutes");
const paymentRouter = require("./Routes/PaymentRoutes");
const authRouter = require("./Routes/AuthorizationRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

connectDB();

app.use("/flights", flightsRouter);
app.use("/bookingFlights", bookingFlightsRouter);
app.use("/users", usersRouter);
app.use("/payment", paymentRouter);
app.use("/auth", authRouter);

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

module.exports = { app };
