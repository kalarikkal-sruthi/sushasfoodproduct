import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";
import MyAccount from "../pages/auth/MyAccount";
import CartPage from "../pages/auth/CartPage";
import ProductDetail from "../pages/product/ProductDetail";
import CategoryProductList from "../pages/categories/CategoryProdcutList";
import ProductsByCategory from "../pages/categories/ProductsByCategory";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import Extraharvestdetail from "../pages/whatwedo/extraharvestcrops/Extraharvestdetail";
import Mostcultivateddetail from "../pages/whatwedo/mostcultivatedcrops/Mostcultivateddetail";
import Extraharvestfull from "../pages/whatwedo/extraharvestcrops/Extraharvestfull";
import Mostcultivatedfull from "../pages/whatwedo/mostcultivatedcrops/Mostcultivatedfull";
import Extraharvestsubcategory from "../pages/whatwedo/extraharvestcrops/Extraharvestsubcategory";
import Aboutfarm from "../components/Aboutfarm";
import Account from "../pages/auth/Account";
import Privacypolicy from "../pages/companyinformation/Privacypolicy";
import Termsconditions from "../pages/companyinformation/Termsconditions";
import Refundcancellationpolicy from "../pages/companyinformation/Refundcancellationpolicy";
import Shippingpolicy from "../pages/companyinformation/Shippingpolicy";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/productsbycategory" element={<CategoryProductList />} />
          <Route
            path="/productsbycategory/:id"
            element={<ProductsByCategory />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/account" element={<Account />} />

          <Route path="/extraharvestfromfarm" element={<Extraharvestfull />} />
          <Route
            path="/extraharvestfromfarm/:category"
            element={<Extraharvestsubcategory />}
          />
          <Route
            path="/extraharvestfromfarm/detail/:id"
            element={<Extraharvestdetail />}
          />

          <Route path="/mostharvestfromfarm" element={<Mostcultivatedfull />} />
          <Route
            path="/mostharvestfromfarm/:id"
            element={<Mostcultivateddetail />}
          />

          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/aboutus" element={<Aboutfarm />} />

          <Route path="/privacy-policy" element={<Privacypolicy />}></Route>
          <Route
            path="/terms-and-conditions"
            element={<Termsconditions />}
          ></Route>
          <Route
            path="/refund-cancellation-policy"
            element={<Refundcancellationpolicy />}
          ></Route>

          <Route path="/shipping-policy" element={<Shippingpolicy />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
