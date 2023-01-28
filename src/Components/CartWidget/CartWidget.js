import React from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      
      <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h6 ">10</span>
      <Link to="/Cart"><i className="bi bi-cart-plus-fill"></i></Link>
    </div>
  );
};

export default CartWidget