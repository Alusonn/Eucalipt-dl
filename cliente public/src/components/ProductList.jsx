import React from "react";
import { useCartUiStore } from "../hooks/useCartUiStore";

export const ProductList = (data) => {

  const { startAddingProduct } = useCartUiStore();

  const onAddCart = async () => {
    console.log("Añadido al carrito de compras de Eucalipto-dl", data.name);
    await startAddingProduct(data)
  };

  return (
    <>
      <div className="card d-inline-block text-center">
        <img src={data.image.secure_url} alt={data.name} className="cardImg" />
        <div className="card-body">
          <div className="card-title">{data.name}</div>
          <div className="cardTextPrice">$ {data.price}</div>
          <hr />
          <div className="addCart" onClick={onAddCart}>
            <div className="card-text">Añadir al carrito</div>
          </div>
        </div>
      </div>
    </>
  );
};
