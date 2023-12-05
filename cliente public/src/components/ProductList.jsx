import React from "react";

export const ProductList = (props) => {
  const onAddCart = () => {
    console.log("Añadido al carrito de compras de Eucalipto-dl");
  };

  return (
    <>
      <div className="card d-inline-block text-center">
        <img
          src={props.image.secure_url}
          alt={props.name}
          className="cardImg"
        />
        <div className="card-body">
          <div className="card-title">{props.name}</div>
          <div className="cardTextPrice">$ {props.price}</div>
          <hr />
          <div className="addCart" onClick={onAddCart}>
            <div className="card-text">Añadir al carrito</div>
          </div>
        </div>
      </div>
    </>
  );
};
