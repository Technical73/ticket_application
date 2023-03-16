import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Features/UserReducer";
import useCheck from "../Features/CheckReducer";
import useFinalCheck from "../Features/FinalCheck";
import useImage from "../Features/ImageReducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
    check: useCheck,
    final: useFinalCheck,
    list: useImage,
  },
});

export default store;
