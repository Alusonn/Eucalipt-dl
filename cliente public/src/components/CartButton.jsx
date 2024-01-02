import React from "react";
import { BsCart4 } from "react-icons/bs";

export const CartButton = () => {
  const handleCart = () => {
    console.log("abriendo carrito");
  };

  return (
    <>
      <button className="btn cartButton" onClick={handleCart}>
        <BsCart4 size={30} color="white" />
      </button>
    </>
  );
};
