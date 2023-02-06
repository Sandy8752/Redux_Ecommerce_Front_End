import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../config";
import { setCart } from "../Redux/actions/productActions";
import CartComponent from "./CartComponent";
import CheckOut from "./CheckOut";

function CartListing() {
  let dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  console.log(carts);

  let fetchCart = async () => {
    try {
      let res = await axios.get(`${config.api}/api/cart`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      dispatch(setCart(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
    <div className=" container-fluid ">
        <div className="row">
            <div className="col-8">
            <CartComponent />
            </div>
            <div className="col-4">
                <CheckOut/>
                
            </div>
        </div>
    
    </div>
      
    </>
  );
}

export default CartListing;