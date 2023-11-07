import React, { useEffect, useState } from "react";
import { useProductsStore } from "../hooks/useProductsStore";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const FormProduct = () => {
  const navigate = useNavigate();

  const { activeProduct, startSavingProduct } = useProductsStore();

  const { handleSubmit, register, control } = useForm();

  const [selectedImage, setSelectedImage] = useState(
    activeProduct ? activeProduct.image : null
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    console.log(file);

    setSelectedImage(file);
  };

  const onSubmit = async (data) => {
    await startSavingProduct(data);

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-6">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingName"
              {...register("name", { required: true, minLength: 3 })}
            />
            <label htmlFor="floatingName">Nombre del producto:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingDescription"
              {...register("description", { required: true, minLength: 3 })}
            />
            <label htmlFor="floatingDescription">Description:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingType"
              {...register("type", { required: true, minLength: 1 })}
            />
            <label htmlFor="floatingType">Tipo:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="number"
              id="floatingPrice"
              {...register("price", { required: true })}
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
        </div>
        <div className="col-6">
          <div className="mb-3 form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="floatingOutstanding"
              {...register("outstanding")}
            />
            <label className="form-check-label" htmlFor="floatingOutstanding">
              Destacado:
            </label>
          </div>
          <div className=" mb-3 form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="floatingSold"
              {...register("sold")}
            />
            <label htmlFor="floatingSold">Sold</label>
          </div>
          <div className="mb-3 form-switch">
            <input
              className="form-check-input"
              id="floatingActive"
              type="checkbox"
              role="switch"
              {...register("active")}
            />
            <label className="form-check-label" htmlFor="floatingActive">
              Activo:
            </label>
          </div>

          <label htmlFor="floatingSizes">Talles:</label>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              value="S"
              className="form-check-input"
              id="sizeS"
              {...register("sizes", { value: false })}
            />
            <label className="form-check-label" htmlFor="sizeS">
              S
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              value="M"
              className="form-check-input"
              id="sizeM"
              {...register("sizes", { value: false })}
            />
            <label className="form-check-label" htmlFor="sizeM">
              M
            </label>
          </div>
          <div className="mb-3 form-check">
            <Controller
              name="sizes"
              control={control}
              defaultValue={activeProduct.sizes?.includes("L") || false}
              render={({ field }) => (
                <>
                  <input
                    type="checkbox"
                    value="L"
                    className="form-check-input"
                    id="sizeL"
                    {...field}
                  />
                  <label className="form-check-label" htmlFor="sizeL">
                    L
                  </label>
                </>
              )}
            />
          </div>
          <div className="mb-3 form-check">
            <Controller
              name="sizes"
              control={control}
              defaultValue={
                activeProduct ? activeProduct.sizes.includes("XL") : false
              }
              render={({ field }) => (
                <>
                  <input
                    type="checkbox"
                    value="XL"
                    className="form-check-input"
                    id="sizeXL"
                    {...field}
                  />
                  <label className="form-check-label" htmlFor="sizeXL">
                    XL
                  </label>
                </>
              )}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="uploadFiles">
              Imagenes
            </label>
            <Controller
              name="image"
              control={control}
              defaultValue={activeProduct ? activeProduct.image : null}
              render={({ field }) => (
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  {...field}
                />
              )}
            />
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};
