const express = require("express");
const paymentController = require("../Controller/paymentController");
const PaymentRouter = express.Router();
PaymentRouter.use(express.json());
PaymentRouter.use(express.urlencoded({ extended: false }));

PaymentRouter.post("/payment", paymentController.payment);

module.exports = PaymentRouter;