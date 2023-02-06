import React from 'react'
import CartListing from '../Components/CartListing'
import Header from '../Components/Header'

function Cart() {
  return (
    <>
    <Header/>
    <div className="container">
        <h3 className="text-center mt-5"> Cart Items</h3>
    </div>
    <CartListing/>
    </>
  )
}

export default Cart