import config from "../config";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../login/Login";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import ProductLayout from "../layouts/ProductLayout/ProductLayout";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Checkout from "../pages/CheckOut/CheckOut";
import SuccessCheckOut from "../pages/SuccessCheckOut/SuccessCheckOut";
import SuccessCheckoutLayout from "../layouts/SuccessCheckoutLayout";
import Register from "../Register/Register";

const defaultRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product, layout: ProductLayout },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.login, component: Login, layout: LoginLayout },
  { path: config.routes.register, component: Register, layout: LoginLayout },

  {
    path: config.routes.successCheckOut,
    component: SuccessCheckOut,
    layout: SuccessCheckoutLayout,
  },
  { path: config.routes.checkout, component: Checkout, protected: true },
  { path: config.routes.cart, component: Cart, protected: true },
];

const adminRoutes = [
  { path: config.routes.homeAdmin, component: HomeAdmin, layout: AdminLayout },
];

export { defaultRoutes, adminRoutes };
