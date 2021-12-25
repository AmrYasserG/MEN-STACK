import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
import axios from "axios";

const stripePromise = loadStripe('pk_test_51K9GgACFXf6lJ84DPhCUsT8a3qoEhsbUfzWQ5yPPjOhYJHnIv6NQM2bwuhyl4QdzwU92Srg0cyia5kqM4SjFS2Da00lopOxPuH');

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const state = useLocation().state;
  const items = {TotalAmount: state.arrFlight.Price + state.depFlight.Price};
  useEffect(() => {
    axios.post("http://localhost:3005/payment/payment", items)
    .then((res)=>{
      setClientSecret(res.data.clientSecret);
    })
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="paymentBody">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}