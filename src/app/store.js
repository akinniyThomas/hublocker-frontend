import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice";
import appReducer from "../AppSlice";
import searchFrameReducer from "../features/searchFrame/searchFrameSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    app: appReducer,
    search: searchFrameReducer,
  },
});
