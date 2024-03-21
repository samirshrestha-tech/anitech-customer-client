import { useDispatch } from "react-redux";
import { fetchProducts } from "../../helper/axiosHelper";

import { setProductList, setSelectedProduct } from "./productSlice";

export const fetchProductsAction = () => async (dispatch) => {
  const response = await fetchProducts();

  const { status, products } = response.data || {};

  if (status === "success" && products !== undefined) {
    dispatch(setProductList(products));
  }
};
