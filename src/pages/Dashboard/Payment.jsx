import React, { useEffect } from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

console.log(stripePromise);

const Payment = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Payment";
  }, []);

  const cartClass = useLoaderData();

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h2 className="text-3xl font-semibold pb-4">
        Enter your payment details!
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm cartClass={cartClass}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
