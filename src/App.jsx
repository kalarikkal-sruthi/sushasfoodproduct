import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayouts from "./layout/MainLayouts";
import AppRoutes from "./routes/routes";
import ScrollToTop from "./utils/ScrollToTop";


function App() {
 
  return (
    <div>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
