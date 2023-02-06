import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, setCart } from "../Redux/actions/productActions";


function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  let dispatch = useDispatch()
  let handleAddCart = (product) => {
    console.log("clicked")
    dispatch(addCart(product))
  }

  return (
    <>
      
      <div className="container">
        <div className="row   ">
          {products.map((product) => {
            return (
              <>
                <div className="col m-3" key={product.id}>
                  <div class="card" style={{ width: "22rem" }}>
                    <img
                      src={product.image}
                      class="card-img-top"
                      style={{ height: "320px" }}
                    />
                    <div class="card-body">
                      <Link to={`/product/${product.id}`}>
                        <h5 class="card-title" style={{ height: "90px" }}>
                          {product.title}
                        </h5>
                      </Link>
                      <p class="card-text text-decoration-none">
                        ${product.price}
                      </p>
                      <p class="card-text text-decoration-none">
                        {product.category}
                      </p>
                      <a onClick={()=>handleAddCart(product)} class="btn border border-2">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductComponent;