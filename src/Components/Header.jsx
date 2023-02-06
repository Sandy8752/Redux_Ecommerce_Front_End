import React from "react";
import { FiLogOut } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const carts = useSelector((state) => state.cart.carts);

  let navigate = useNavigate()
  let handleLogout = () => {
    localStorage.removeItem('react_app_token')
    navigate('/')
  };
  return (
    <>
      <nav class="navbar bg-light h-50">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Redux Store
          </a>
          <div className="d-flex">
            <Link to={'/cart'} className="btn border border-2 me-2" >
              Cart <MdShoppingCart />
              <span class="badge text-bg-secondary">{carts.length}</span>
            </Link>
            <button
              className="btn border border-2 me-2"
              onClick={() => handleLogout()}
            >
              Logout <FiLogOut />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;