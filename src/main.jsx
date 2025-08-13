
import { createRoot } from "react-dom/client";

// Global styles
import "./index.css";
import "./animation.css";
import "./style.css";
import "./mystyle.css";
import "bootstrap/dist/css/bootstrap.min.css";


import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html has a <div id='root'></div>");
}
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </PersistGate>
  </Provider>
);
