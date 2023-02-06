import { ActionTypes } from "../contants/action-types";

const initState = {
  products: [],
};

const initCart = {
  carts: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case ActionTypes.SET_CATEGORY:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const cartReducer = (state = initCart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_CART:
      console.log("setting cart");
      break;

    case ActionTypes.SET_CART:
      return {
        ...state,
        carts: payload,
      };

    default:
      return state;
  }
};