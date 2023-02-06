import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
import { config } from "../config";
import { setCart } from "../Redux/actions/productActions";

function CartComponent() {
  let dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  let addQuantity = async (cart) => {
    await axios.put(`${config.api}/api/cart`, cart, {
      headers: {
        Authorization: `${localStorage.getItem("react_app_token")}`,
      },
    });
    dispatch(setCart(carts));
  };

  let decQuantity = async (cart) => {
    await axios.put(`${config.api}/api/cart/dec`, cart, {
      headers: {
        Authorization: `${localStorage.getItem("react_app_token")}`,
      },
    });
    dispatch(setCart(carts));
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          {carts.map((cart) => {
            return (
              <div className="col m-3" key={cart._id}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={cart.image}
                    class="card-img-top"
                    style={{ height: "320px" }}
                  />
                  <div class="card-body">
                    <div>
                      <h5 cldivss="card-title" style={{ height: "90px" }}>
                        {cart.product}
                      </h5>
                    </div>
                    <p class="card-text text-decoration-none">${cart.price * cart.quantity}</p>
                    <p class="card-text text-decoration-none">
                      {cart.category}
                    </p>
                    <HiOutlineMinus onClick={() => decQuantity(cart)} />
                    <a class="btn border border-2">{cart.quantity}</a>
                    <BsPlusLg onClick={() => addQuantity(cart)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CartComponent;