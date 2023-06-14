import React from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

console.log(stripePromise);

const Payment = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Payment";
  }, []);

  const price = useParams();
  return (
    <div>
      <h2>Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
