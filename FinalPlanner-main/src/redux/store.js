import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/data";

export default configureStore({
  reducer: {
    data,
  },
});
