import { useDispatch, useSelector } from "react-redux";
import {
  onAddProduct,
  onCloseCartUi,
  onOpenCartUi,
} from "../store/cartUiSlice";

export const useCartUiStore = () => {
  const dispatch = useDispatch();

  const { isOpen, products } = useSelector((state) => state.useCartUiStore);

  const startOpeningCart = async () => {
    try {
      dispatch(onOpenCartUi());
    } catch (error) {
      console.log(error);
    }
  };

  const startClosingCart = async () => {
    try {
      dispatch(onCloseCartUi());
    } catch (error) {
      console.log(error);
    }
  };

  const startAddingProduct = async (data) => {
    try {
      dispatch(onAddProduct(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Properties

    isOpen,
    products,

    // Methods

    startOpeningCart,
    startClosingCart,
    startAddingProduct,
  };
};
