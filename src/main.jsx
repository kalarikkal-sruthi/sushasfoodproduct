import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./animation.css";
import "./style.css";
import "./mystyle.css"

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { store, persistor } from "./store/index.js";

import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
