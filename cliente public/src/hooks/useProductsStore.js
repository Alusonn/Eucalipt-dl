import { useDispatch, useSelector } from "react-redux";
import { onLoadProducts } from "../store/productsSlice";
import { adminApi } from "../api/adminApi";
import axios from "axios";

export const useProductStore = () => {
  const dispatch = useDispatch();

  const { products, activeProduct } = useSelector((state) => state.products);

  const startLoadingProducts = async () => {
    try {
      const { data } = await adminApi.get("/products");

      dispatch(onLoadProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //  Propiedades

    products,
    activeProduct,

    // Metodos

    startLoadingProducts,
  };
};
