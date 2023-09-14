import { configureStore } from "@reduxjs/toolkit";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import { userSelectSliceReducer, fillForm } from "./slices/userSelectSlice";
import { productsAPI } from "./API/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useGetProductsQuery } from "./API/productsAPI";

// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUISettingsReducer = persistReducer(
  persistConfig,
  uiSettingsReducer
);
const persistedUserSelectReducer = persistReducer(
  persistConfig,
  userSelectSliceReducer
);

export const store = configureStore({
  reducer: {
    uiSettings: persistedUISettingsReducer,
    userSelect: persistedUserSelectReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export const persistedStore = persistStore(store);

export { useGetProductsQuery, fillForm, themeSwitch };
