import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggle";
import itemsReducer from "./items";

const store = configureStore({
  reducer: {
    ui: toggleReducer,
    items: itemsReducer,
  },
});

export default store;
