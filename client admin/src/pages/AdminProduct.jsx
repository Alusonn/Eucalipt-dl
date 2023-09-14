import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../hooks/useProductsStore";
import { useForm } from "react-hook-form";

export const AdminProduct = () => {
  const { _id } = useParams();

  const { products, startLoadingProduct } = useProductsStore();

  useEffect(() => {
    startLoadingProduct(_id);
  }, [_id]);

  const {
    name,
    description,
    type,
    price,
    sku,
    sizes,
    outstanding,
    sold,
    active,
  } = products;

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={name}
              className="form-control"
              id="floatingName"
            />
            <label for="floatingName">Nombre del producto:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingDescription" placeholder="Descripcion..."/>
            <label for="floatingDescription">Description:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" value={type} className="form-control" id="floatingType" placeholder="Tipo..."/>
            <label for="floatingType">Tipo:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" value={price} className="form-control" id="floatingPrice" placeholder="Precio..."/>
            <label for="floatingPrice">Precio:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" value={sku} className="form-control" id="floatingSku" placeholder="sku"/>
            <label for="floatingSku">SKU:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="boolean"
              value={outstanding}
              className="form-control"
              placeholder="Destacado..."
              id="floatingOutstanding"
            />
            <label for="floatingOutstanding">Destacado:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="boolean" value={sold} className="form-control" id="floatingSold" placeholder="Vendido..."/>
            <label for="floatingSold">Vendido:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="boolean" value={active} className="form-control" id="floatingActive" placeholder="Activo..."/>
            <label for="floatingActive">Activo:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="checkbox" value={sizes} className="form-control" id="floatingSizes" placeholder="Talle..."/>
            <label for="floatingSizes">Talle:</label>
          </div>
        </div>
        <div></div>
        <div className="col-8"></div>
      </div>
    </>
  );
};
