import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import WhatWeDo from "../pages/WhatWeDo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
 