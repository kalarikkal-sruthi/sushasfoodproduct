import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./animation.css";
import "./style.css";
import { store } from "./store/index.jsx";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
