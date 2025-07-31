import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import WhatWeDo from "../pages/WhatWeDo";
import TestPage from "../pages/TestPage";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";

const AppRoutes = () => {
  return (
    <Routes>
<Route path="/register" element={<RegisterPage />} />
<Route path="/login" element={<LoginPage />} />
       
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={<ProductList />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/testpage" element={<TestPage />} />
        <Route path="/productdetail" element={<ProductDetailsPage />} />
    
      </Route>
    </Routes>
  );
};

export default AppRoutes;
 