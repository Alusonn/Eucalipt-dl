import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../hooks/useProductsStore";
import { useForm } from "react-hook-form";

export const AdminProduct = () => {
  const { id } = useParams();

  const { activeProduct, startLoadingProduct } = useProductsStore();

  useEffect(() => {
    startLoadingProduct(id);
  }, []);

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
  } = activeProduct;

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
            <label htmlFor="floatingName">Nombre del producto:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingDescription" placeholder="Descripcion..."/>
            <label htmlFor="floatingDescription">Description:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" value={type} className="form-control" id="floatingType" placeholder="Tipo..."/>
            <label htmlFor="floatingType">Tipo:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" value={price} className="form-control" id="floatingPrice" placeholder="Precio..."/>
            <label htmlFor="floatingPrice">Precio:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" value={sku} className="form-control" id="floatingSku" placeholder="sku"/>
            <label htmlFor="floatingSku">SKU:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="boolean"
              value={outstanding}
              className="form-control"
              placeholder="Destacado..."
              id="floatingOutstanding"
            />
            <label htmlFor="floatingOutstanding">Destacado:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="boolean" value={sold} className="form-control" id="floatingSold" placeholder="Vendido..."/>
            <label htmlFor="floatingSold">Vendido:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="boolean" value={active} className="form-control" id="floatingActive" placeholder="Activo..."/>
            <label htmlFor="floatingActive">Activo:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="checkbox" value={sizes} className="form-control" id="floatingSizes" placeholder="Talle..."/>
            <label htmlFor="floatingSizes">Talle:</label>
          </div>
        </div>
        <div></div>
        <div className="col-8"></div>
      </div>
    </>
  );
};
