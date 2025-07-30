import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayouts from "./layout/MainLayouts";
import AppRoutes from "./routes/routes";
import ScrollToTop from "./utility/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        {/* <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes> */}
        <ScrollToTop/>
        <AppRoutes/>
      </Router>
     
    </div>
  );
}

export default App;
