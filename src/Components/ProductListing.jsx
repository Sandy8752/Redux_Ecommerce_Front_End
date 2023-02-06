import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setCategory, setProducts } from "../Redux/actions/productActions";
import Header from "./Header";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(res.data));
  };
  const handleClick = async (category) => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setCategory(res.data));
  };
  useEffect(() => {
    fetchProducts();
  },[]);

  console.log(products);
  return (
    <>
      <Header />
      <div className="container">
        <div className="container mt-5 mb-5">
          <div className="h2 text-center">LATEST PRODUCTS</div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <button
              className="col btn border border-2 w-25 "
              onClick={() => fetchProducts()}
            >
              All
            </button>
            <button
              className="col btn border border-2 w-25"
              onClick={() => handleClick("men's clothing")}
            >
              Men
            </button>
            <button
              className="col btn border border-2 w-25"
              onClick={() => handleClick("women's clothing")}
            >
              Women
            </button>
            <button
              className="col btn border border-2 w-25"
              onClick={() => handleClick("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="col btn border border-2 w-25"
              onClick={() => handleClick("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>
        <ProductComponent />
      </div>
    </>
  );
}

export default ProductListing;