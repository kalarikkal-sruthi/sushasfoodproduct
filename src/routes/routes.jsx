import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import WhatInFarmList from "../pages/WhatInFarmList";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";
import ProductDetail from "../pages/product/ProductDetail";
import MyAccount from "../pages/auth/MyAccount";
import Checkout from "../pages/checkout/Checkout";
import CartPage from "../pages/CartPage";
import CategoryProductList from "../pages/categories/CategoryProdcutList";
import ProductsByCategory from "../pages/categories/ProductsByCategory";
import WhatInFarmDetail from "../pages/WhatInFarmDetail";
import OrderPage from "../pages/orders/OrderPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
         <Route path="/productsbycategory" element={<CategoryProductList />} />
        <Route
          path="/productsbycategory/:id"
          element={<ProductsByCategory />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/whatinfarm" element={<WhatInFarmList />} />
        <Route path="/whatinfarm/:id" element={<WhatInFarmDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
       
      </Route>
    </Routes>
  );
};

export default AppRoutes;
