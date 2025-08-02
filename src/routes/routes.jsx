import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import WhatWeDo from "../pages/WhatWeDo";

import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";
import ProductDetail from "../pages/product/ProductDetail";
import Products from "../pages/product/Products";
import MyAccount from "../pages/auth/MyAccount";
import Checkout from "../pages/checkout/Checkout";

import CartPage from "../pages/CartPage";
import CategoryProductList from "../pages/categories/CategoryProdcutList";
import ProductsByCategory from "../pages/categories/ProductsByCategory";
import WhatInFarm from "../pages/WhatInFarm";
import WhatInFarmList from "../pages/WhatInFarmList";
import WhatInFarmDetail from "../pages/WhatInFarmDetail";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />

        <Route path="/productlist" element={<ProductList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/whatinfarm" element={<WhatInFarmList />} />
        <Route path="/whatinfarm/:id" element={<WhatInFarmDetail />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/checkout" element={<Checkout />} />


        <Route path="/cart" element={<CartPage />} />
        <Route path="/productsbycategory" element={<CategoryProductList />} />
        <Route path="/productsbycategory/:id" element={<ProductsByCategory />} />


      
      </Route>
    </Routes>
  );
};

export default AppRoutes;
