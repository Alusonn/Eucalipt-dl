import { useDispatch, useSelector } from "react-redux";
import { onFilteredProducts, onLoadProducts, onSelectSize } from "../store/productsSlice";
import { adminApi } from "../api/adminApi";

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

  const startFilteredProducts = async (selectSize) => {
    try {

      dispatch(onSelectSize(selectSize))

      const filter = await products.filter((product) =>
        product.sizes.includes(`${selectSize}`)
      );

      dispatch(onFilteredProducts(filter));
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

    startLoadingProducts,
    startFilteredProducts,
  };
};
