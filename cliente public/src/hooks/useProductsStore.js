import { useDispatch, useSelector } from "react-redux";
import {
  onFilteredProducts,
  onLoadProducts,
  onSelectSize,
} from "../store/productsSlice";
import { adminApi } from "../api/adminApi";

export const useProductStore = () => {
  const dispatch = useDispatch();

  const { products, activeProduct, filteredProducts } = useSelector(
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

  const startFilteredProducts = (selectedSize) => {
    try {
      const result = selectedSize
        ? products.filter((product) =>
            product.sizes.includes(`${selectedSize}`)
          )
        : products.map((product) => product); // O simplemente return products; si no necesitas una copia

      return dispatch(onFilteredProducts(result));

      // if (selectedSize) {
      //   const result = await products.filter((product) =>
      //     product.sizes.includes(`${selectedSize}`)
      //   );

      //   return startFilteredProducts(result);
      // } else {
      //   const result = await products.map((product) => product);
      //   return console.log(result);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //  Propiedades

    products,
    activeProduct,
    filteredProducts,

    // Metodos

    startLoadingProducts,
    startFilteredProducts,
  };
};
