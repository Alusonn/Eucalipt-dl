import React from "react";

export const ProductList = ({ name = "Remera", price = 400 }) => {

  const onClickCart = () => {
    console.log("Añadido al carrito de compras de Eucalipto-dl")
  }

  return (
    <>
      <div className="d-inline-block col-3 text-center px-2 py-2 card-body">
        <div className="card-title">{name}</div>
        <div className="card-text">$ {price}</div>
        <div className="d-inline-block my-3 py-2 px-4 addCart" onClick={onClickCart}>
          <div className="card-text">Añadir al carrito</div>
        </div>
      </div>
    </>
  );
};
