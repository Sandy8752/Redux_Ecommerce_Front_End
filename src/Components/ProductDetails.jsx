import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeSelectedProduct, selectedProduct } from "../Redux/actions/productActions";
import Header from "./Header";

function ProductDetails() {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchData = async () => {
    let res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchData();

    return ()=>{
        dispatch(removeSelectedProduct())
    }
  }, [productId]);
  console.log(product);
  return (
    <>
    <Header />
    <div className="container">
    <div class="card mb-3" style={{ width: "1300px", height:"800px", marginTop:"40px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={product.image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">
              {product.description}
            </p>
            <p class="card-text">
              <small class="text-muted">${product.price}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div></>
  );
}

export default ProductDetails;