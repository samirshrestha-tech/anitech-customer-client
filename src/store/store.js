import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    adminInfo: adminReducer,

    productInfo: productReducer,
  },
});
