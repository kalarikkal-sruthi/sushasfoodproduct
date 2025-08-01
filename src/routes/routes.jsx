import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import WhatWeDo from "../pages/WhatWeDo";

import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";
import ProductDetail from "../pages/product/ProductDetail";
import Products from "../pages/product/Products";
import CartPage from "../pages/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
   <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        
       
      <Route element={<MainLayouts />}>
       
        <Route path="/" element={<Home />} />

        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/cart" element={<CartPage />} />

        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
 