import React, { useEffect } from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

console.log(stripePromise);

const Payment = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Payment";
  }, []);

  const { user, loading } = useContext(AuthContext);

  const cartClass = useLoaderData();

  console.log("Mail CartCLass", cartClass);
  // const { data: cartClass = [], refetch } = useQuery(
  //   ["cartClass"],
  //   async () => {
  //     const res = await axios.get(
  //       `http://localhost:5000/carts?email=${user?.email}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //         },
  //       }
  //     );
  //     return res.data;
  //   }
  // );

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
