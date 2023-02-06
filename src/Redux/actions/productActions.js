import instance from "../../api";
import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const setCategory = (products) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: products,
  };
};

export const setCart = (products) => {
  return {
    type: ActionTypes.SET_CART,
    payload: products,
  };
};


export const addCart = (product) => {
  try {
    return async (dispatch) => {
      let res = await instance.post("/api/cart/products", product, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      if (res.data) {
        alert(res.data.message);
        window.location.reload(false);
      }
      dispatch({
        type: ActionTypes.ADD_CART,
      });
    };
  } catch (error) {}
};

