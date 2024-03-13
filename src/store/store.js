import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../pages/product/productSlice";

export default configureStore({
  reducer: {
    productInfo: productReducer,
  },
});
