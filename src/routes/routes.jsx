import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout
import MainLayouts from "../layout/MainLayouts";

// Pages
import Home from "../pages/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";
import MyAccount from "../pages/auth/MyAccount";
import Checkout from "../pages/checkout/Checkout";
import CartPage from "../pages/auth/CartPage";
import OrderPage from "../pages/orders/OrderPage";

import ProductDetail from "../pages/product/ProductDetail";
import CategoryProductList from "../pages/categories/CategoryProdcutList";
import ProductsByCategory from "../pages/categories/ProductsByCategory";

import CheckoutPage from "../pages/checkout/CheckoutPage";

// What We Do Pages
import Extraharvestdetail from "../pages/whatwedo/extraharvestcrops/Extraharvestdetail";
import Mostcultivateddetail from "../pages/whatwedo/mostcultivatedcrops/Mostcultivateddetail";
import Extraharvestfull from "../pages/whatwedo/extraharvestcrops/Extraharvestfull";
import Mostcultivatedfull from "../pages/whatwedo/mostcultivatedcrops/Mostcultivatedfull";
import Extraharvestsubcategory from "../pages/whatwedo/extraharvestcrops/Extraharvestsubcategory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Categories & Products */}
        <Route path="/productsbycategory" element={<CategoryProductList />} />
        <Route
          path="/productsbycategory/:id"
          element={<ProductsByCategory />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Orders & Checkout */}
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Auth */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myaccount" element={<MyAccount />} />

        {/* What We Do */}

        <Route path="" element={<Extraharvestfull />} />
        <Route path="" element={<Extraharvestsubcategory />} />
        <Route path="" element={<Extraharvestdetail />} />

        <Route path="" element={<Mostcultivatedfull />} />
        <Route path="" element={<Mostcultivateddetail />} />

        <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
