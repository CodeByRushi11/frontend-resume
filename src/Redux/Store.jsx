import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import authReducer from "./Features/authSlice";
import taskReducer from "./Features/taskSlicer";
import themeReducer from "./Features/themeSlice";
import toastReducer from "./Features/toastSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    tasks: taskReducer,
    theme: themeReducer,
    toast: toastReducer,
  },
});
