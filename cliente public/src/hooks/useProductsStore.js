import { useDispatch, useSelector } from "react-redux";
import { onFilteredProducts, onLoadProducts, onSelectSize } from "../store/productsSlice";
import { adminApi } from "../api/adminApi";

export const useProductStore = () => {
  const dispatch = useDispatch();

  const { products, activeProduct, selectedSize, filteredProducts } = useSelector(
    (state) => state.products
  );

  const startLoadingProducts = async () => {
    try {
      const { data } = await adminApi.get("/products");

      dispatch(onLoadProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startFilteredProducts = async (data) => {
    try {

      const result = await data

      dispatch(onFilteredProducts(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //  Propiedades

    products,
    activeProduct,
    selectedSize,
    filteredProducts,

    // Metodos

    startLoadingProducts,
    startFilteredProducts,
  };
};
