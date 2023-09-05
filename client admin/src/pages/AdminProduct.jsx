import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../hooks/useProductsStore";

export const AdminProduct = () => {

  const { _id } = useParams();

  const { products, startLoadingProduct } = useProductsStore();

  useEffect(() => {
    startLoadingProduct(_id);
  }, [_id]);

  const { name } = products;

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input type="text" value={name}></input>
        </div>
        <div className="col-8"></div>
      </div>
    </>
  );
};
