import { useDispatch, useSelector } from "react-redux";
import { adminApi } from "../api/adminApi";
import {
  onCleanProducts,
  onDeleteProduct,
  onLoadProduct,
  onLoadProducts,
  onSetActiveProduct,
} from "../store/productsSlice";

export const useProductsStore = () => {
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

  const setActiveProduct = async (data) => {
    try {
      dispatch(onSetActiveProduct(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startDeletingProduct = async (_id) => {
    try {
      await adminApi.delete(`/products/${_id}`);
      dispatch(onDeleteProduct());
    } catch (error) {
      console.log(error);
    }
  };

  const startLoadingProduct = async(_id) => {
    try {
      const {data} = await adminApi.get(`/products/${_id}`);
      await dispatch(onLoadProduct(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startSavingProduct = async(data) => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  return {
    // Propiedades

    products,
    activeProduct,

    // Metodos

    startLoadingProducts,
    setActiveProduct,
    startDeletingProduct,
    startLoadingProduct,
  };
};
