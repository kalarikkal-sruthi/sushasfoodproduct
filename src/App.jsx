import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayouts from "./layout/MainLayouts";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
