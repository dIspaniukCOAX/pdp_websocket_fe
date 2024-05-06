import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

export const Payment = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY as string);

  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};
