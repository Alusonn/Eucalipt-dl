import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../hooks/useProductsStore";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const AdminProduct = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    startLoadingProduct(id);
  }, []);
  const { startSavingProduct, activeProduct, startLoadingProduct } =
    useProductsStore();

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: activeProduct,
  });

  const { name, type, price, sku, sizes, outstanding, sold, active } =
    activeProduct;

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (activeProduct) {
      setValue("name", activeProduct.name);
      setValue("description", activeProduct.description);
      setValue("type", activeProduct.type);
      setValue("price", activeProduct.price);
      setValue("sku", activeProduct.sku);
      setValue("outstanding", activeProduct.outstanding);
      setValue("sold", activeProduct.sold);
      setValue("active", activeProduct.active);
      setValue("sizes", activeProduct.sizes);
    }
  }, [activeProduct, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingName"
                {...register("name")}
              />
              <label htmlFor="floatingName">Nombre del producto:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingDescription"
                {...register("description")}
              />
              <label htmlFor="floatingDescription">Description:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingType"
                {...register("type")}
              />
              <label htmlFor="floatingType">Tipo:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                id="floatingPrice"
                {...register("price")}
              />
              <label htmlFor="floatingPrice">Precio:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                id="floatingSku"
                {...register("sku")}
              />
              <label htmlFor="floatingSku">SKU:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="radio"
                id="floatingOutstanding"
                {...register("outstanding")}
              />
              <label htmlFor="floatingOutstanding">Opcion:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="boolean"
                value={sold}
                className="form-control"
                id="floatingOutstanding"
                placeholder="Vendido..."
              />
              <label htmlFor="floatingSold">sad</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="boolean"
                value={active}
                className="form-control"
                id="floatingActive"
                placeholder="Activo..."
              />
              <label htmlFor="floatingActive">Activo:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="checkbox"
                value={sizes}
                className="form-control"
                id="floatingSizes"
                placeholder="Talle..."
              />
              <label htmlFor="floatingSizes">Talle:</label>
            </div>
          </div>
          <div></div>
          <div className="col-8"></div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
