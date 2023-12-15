import { useDispatch, useSelector } from "react-redux";
import { onFilteredProducts, onLoadProducts } from "../store/productsSlice";
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

  const startFilteredProducts = async (selectedSize) => {
    try {
      const filtered = await products.filter(
        (product) => product.sizes === selectedSize
      );
      dispatch(onFilteredProducts(filtered));
    } catch (error) {
      console.log(error);
    }
  };

  const startSelectSize = async()

  return {
    //  Propiedades

    products,
    activeProduct,

    // Metodos

    startLoadingProducts,
    startFilteredProducts,
  };
};
