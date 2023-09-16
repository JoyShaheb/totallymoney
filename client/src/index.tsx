import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, persistedStore } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Index = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Index />
);
