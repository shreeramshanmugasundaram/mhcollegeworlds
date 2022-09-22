import React, { useState } from "react";
import axios from "axios";
import {NavLink, useNavigate} from 'react-router-dom'
import "./payment.css"

const Payment = () => {
  const navigate =useNavigate()
  const userdata = JSON.parse(localStorage.getItem("profile"));
  const [loading, setloading] = useState(false);
  const loadRazorpay = () => {
    console.log("inside loadRazorpay");
    const script = document.createElement("script");
    console.log("creading script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      console.log("onerror");
      alert("Razorpay failed to load. Are you online?");
    };
    console.log("before load");
    script.onload = async () => {
      try {
        setloading(true);
        console.log("inside onload");
        const result = await axios.post(
          "http:141.136.47.162/api/payment/create-order"
        );
        const { amount, id: order_id, currency } = result.data;

        const {
          data: { key: razorpay },
        } = await axios.get("http:141.136.47.162/api/payment/get-razorpay-key");

        const options = {
          key: razorpay,
          amount: amount.toString(),
          currency: currency,
          name: userdata.result.name,
          description: userdata.result.phone,
          order_id: order_id,
          handler: async (response) => {
            const result = await axios.post(
              "http:141.136.47.162/api/payment/pay-order",
              {
                token : userdata.token ,
                id : userdata.result._id ,
                phone:userdata.result.phone,
                amount: amount,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              }
            );
            const profile = JSON.parse(localStorage.getItem("profile"))
            profile.result.isPaid = true
            console.log(profile)
            localStorage.setItem("profile", JSON.stringify({ ...profile,profile }));
            console.log("redone" +JSON.parse(localStorage.getItem("profile")))
            alert(result.data.msg);
            navigate("/collect")
          },
          prefill: {
            name: userdata.result.name,
            contact: userdata.result.phone,
          },
          notes: {
            address: "example address",
          },
          // theme: {
          //   color: "#f1f1f1",
          // },
        };
        setloading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        alert(error);
        setloading(false);
      }
    };
    document.body.appendChild(script);
  };
  return (
    <>
    <div className="payment__gateway">
      <h2>Payment Gateway</h2>
        <h3>Premium of Rs 249/-</h3>
        <button className="nav__login" disabled={loading} onClick={loadRazorpay}>
          Paynow
        </button> 
        <NavLink to ="/policies">Our Policies</NavLink>
      {loading && <div>Loading...</div>}
    </div>      
    </>
  );
};


export default Payment;
