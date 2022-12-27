import { configureStore } from "@reduxjs/toolkit";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import { userSelectSliceReducer, fillForm } from "./slices/userSelectSlice";
import { productsAPI } from "./API/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useGetProductsQuery } from "./API/productsAPI";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
    userSelect: userSelectSliceReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsAPI.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetProductsQuery, fillForm,themeSwitch };
