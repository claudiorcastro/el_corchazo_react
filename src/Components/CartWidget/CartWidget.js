import React from 'react'

const CartWidget = () => {
  return (
    <div>
      <a href="..."><i className="bi bi-cart-plus-fill"></i></a>
      <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h6 ">10</span>
    </div>
  );
};

export default CartWidget