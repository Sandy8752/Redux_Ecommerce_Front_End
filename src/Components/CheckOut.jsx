import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { config } from "../config";

function CheckOut() {
  const carts = useSelector((state) => state.cart.carts);
  let sum = 0;
  let initPayment = async (data) => {
    try {
      const options = {
        key: "rzp_test_ghttQLZkKGGWv4",
        amount: data.amount,
        currency: data.currency,
        name: "Orders",
        description: "Test Transcation",
        handler: async (response) => {
          try {
            let res = await axios.post(
              `${config.api}/api/payment/verify`,
              response
            );
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        },
        theme: {
          color: "blue",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };
  let handlePayment = async (value) => {
    console.log(value);
    try {
      let res = await axios.post(`${config.api}/api/payment/order`, {
        amount: value,
      });
      console.log(res.data);
      initPayment(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ul class="list-group">
        <li class="list-group-item bg-secondary text-white" aria-current="true">
          Checkout
        </li>
        {carts.map((cart) => {
          {
            sum += cart.quantity * cart.price;
          }
          return (
            <li className="list-group-item">
              <div className="w-50 ">{cart.product}</div>
              <div className="d-inline">-</div>
              <div>
                {cart.quantity} * {cart.price}
              </div>
              <div className="d-inline">-</div>
              <div>${cart.quantity * cart.price}</div>
            </li>
          );
        })}
        {}
        <li className="list-group-item " aria-current="true">
          <span className="p-5">Total: ${(sum = Math.round(sum))}</span>
          <button
            className="btn text-white  bg-secondary"
            onClick={() => handlePayment(sum)}
          >
            PayNow
          </button>
        </li>
      </ul>
    </>
  );
}

export default CheckOut;