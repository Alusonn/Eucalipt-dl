import { useDispatch, useSelector } from "react-redux";
import {
  onFilteredProducts,
  onLoadProducts,
  onSelectSize,
} from "../store/productsSlice";
import { adminApi } from "../api/adminApi";
import axios from "axios";

export const useProductStore = () => {
  const dispatch = useDispatch();

  const { products, activeProduct, selectedSize } = useSelector(
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

  const startSelectingSize = async (selectSize) => {
    try {
      dispatch(onSelectSize(selectSize));
    } catch (error) {
      console.log(error);
    }
  };

  const startFilteredProducts = async (filteredProducts) => {
    try {
      let data = await filteredProducts;

      console.log(data)
      dispatch(onFilteredProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //  Propiedades

    products,
    activeProduct,
    selectedSize,

    // Metodos

    startSelectingSize,
    startLoadingProducts,
    startFilteredProducts,
  };
};
