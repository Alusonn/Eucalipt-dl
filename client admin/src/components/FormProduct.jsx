import React, { useEffect, useState } from "react";
import { useProductsStore } from "../hooks/useProductsStore";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FormProduct = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { activeProduct, startSavingProduct } = useProductsStore();

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: { ...activeProduct },
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = async (event) => {
    event.preventDefault();

    const file = await event.target.files[0];


    setSelectedImage(file);
  };

  const onSubmit = async (data) => {

    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('type', data.type)
    formData.append('price', data.price)
    formData.append('sku', data.sku)
    formData.append('outstanding', data.outstanding !== undefined ? data.outstanding : false)
    formData.append('sold', data.sold !== undefined ? data.sold : false);
    formData.append('active', data.active !== undefined ? data.active : false)
    formData.append('sizes', data.sizes)
    formData.append('image', selectedImage)

    await startSavingProduct(formData);
    console.log(formata)

    navigate("/");
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
              {...register("type", { required: true, minLength: 3 })}
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
              {...register("outstanding", { value: false })}
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
              {...register("sold", { value: false })}
            />
            <label htmlFor="floatingSold">Sold</label>
          </div>
          <div className="mb-3 form-switch">
            <input
              className="form-check-input"
              id="floatingActive"
              type="checkbox"
              role="switch"
              {...register("active", { value: true })}
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
            <label className="form-check-label" htmlFor="sizeS">
              M
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              value="L"
              className="form-check-input"
              id="sizeL"
              {...register("sizes", { value: false })}
            />
            <label className="form-check-label" htmlFor="sizeS">
              L
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              value="XL"
              className="form-check-input"
              id="sizeXL"
              {...register("sizes", { value: false })}
            />
            <label className="form-check-label" htmlFor="sizeS">
              XL
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="uploadFiles">
              Imagenes
            </label>
            <input
              type="file"
              className="form-control"
              id="uploadFiles"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};
