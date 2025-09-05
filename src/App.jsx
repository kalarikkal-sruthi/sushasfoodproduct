import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import ScrollToTop from "./utils/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
