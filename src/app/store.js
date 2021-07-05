import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import headerReducer from "../features/header/headerSlice";
import appReducer from "../AppSlice";
import searchFrameReducer from '../features/searchFrame/searchFrameSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    app: appReducer,
    search: searchFrameReducer,
  },
});
