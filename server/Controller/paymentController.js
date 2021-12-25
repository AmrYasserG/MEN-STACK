require("dotenv").config({ path: __dirname + "/./../../.env" });
const stripe = require("stripe")('sk_test_51K9GgACFXf6lJ84DohfAgddIzhpDoBmqyvXRByD9P8IZ3ZDNkBy0Bi4qfTnE7Gk2jO2oK1RuEtwDpBQ5I0H6mIYU00MIQchAFw');

const calculateOrderAmount = (items) => {
  return items.TotalAmount *100;
};

const payment = async (req,res)=>{
    const items  = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    }); 
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
}

module.exports = {payment};
