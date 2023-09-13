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
            <label for>Nombre del producto:</label>
            <input type="text" value={name} className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="text" value={type} className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="number" value={price} className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="number" value={sku} className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input
              type="boolean"
              value={outstanding}
              className="form-control"
            />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="boolean" value={sold} className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="boolean" value={active} className="form-control" />
          </div>
          <div className="form-floating mb-3">
            <label for>:</label>
            <input type="checkbox" value={sizes} className="form-control" />
          </div>
        </div>
        <div></div>
        <div className="col-8"></div>
      </div>
    </>
  );
};
