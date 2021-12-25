import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./Payment.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const state = useLocation().state;
  let create = true;

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "sk_test_51K9GgACFXf6lJ84DohfAgddIzhpDoBmqyvXRByD9P8IZ3ZDNkBy0Bi4qfTnE7Gk2jO2oK1RuEtwDpBQ5I0H6mIYU00MIQchAFw"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (create) {
      localStorage.setItem("state",JSON.stringify(state));
      setIsLoading(true);
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/ConfirmedFlight",
        },
      })    
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
      setIsLoading(false);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element"/>
      <div style={{ textAlign: "center" }}>
        <button
          disabled={isLoading || !stripe || !elements}
          id="cancel"
          onClick={() => {
            create = false;
            localStorage.removeItem("state");
            window.location.href = "/Homepage";
          }}
          style={{ backgroundColor: "red" }}
        >
          <span id="button-text">{"Cancel"}</span>
        </button>
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          style={{ backgroundColor: "green", marginLeft: "5%" }}
        >
          <span id="button-text">
            {isLoading ? (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
      </div>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
