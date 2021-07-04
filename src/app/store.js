import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import headerReducer from "../features/header/headerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer
  },
});
