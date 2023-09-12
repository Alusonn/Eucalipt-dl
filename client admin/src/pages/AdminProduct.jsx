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

  const [formValues, setFormValues] = useState({
    
  });

  useEffect(() => {
    if (products !== null) {
      setFormValues(
        name,
        description,
        type,
        price,
        sku,
        sizes,
        outstanding,
        sold,
        active
      );
    }
  }, [products]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input type="text" value={name} onChange={onInputChange} />
          <input
            type="text"
            value={description}
            onChange={onInputChange}
          />
          <input type="text" value={type} onChange={onInputChange} />
          <input
            type="number"
            value={price}
            onChange={onInputChange}
          />
          <input
            type="number"
            value={sku}
            onChange={onInputChange}
          />
          <input
            type="boolean"
            value={outstanding}
            onChange={onInputChange}
          />
          <input
            type="boolean"
            value={sold}
            onChange={onInputChange}
          />
          <input
            type="boolean"
            value={active}
            onChange={onInputChange}
          />
          <input
            type="checkbox"
            value={sizes}
            onChange={onInputChange}
          />
        </div>
        <div></div>
        <div className="col-8"></div>
      </div>
    </>
  );
};
