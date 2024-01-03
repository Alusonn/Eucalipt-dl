import React from "react";

export const CartItem = (product) => {
  const id = product._id;

  const { name, _id, description, sizes, type, price } = product;

  const image = product.image.secure_url;

  const handleExitProductCart = () => {
    console.log("se elimino", name);
  };

  return (
    <div className="cartItem">
      <button
        title={`Eliminar del carrito ${name}`}
        className="exitproductCart"
        onClick={handleExitProductCart}
      >
        <span>X</span>
      </button>
      <img src={image} alt={name} className="cartImg" />
      <div className="cartDetails">
        <p className="cartTitle">{name}</p>
        <p className="cartDescription">Talle: {sizes} | {type}</p>
        <p className="cartQuantity">dsa</p>
      </div>
      <div className="cartProductPrice">
        <p cartPrice>$ {price}</p>
      </div>
    </div>
  );
};
