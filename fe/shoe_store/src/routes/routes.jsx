import config from "../config";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../login/Login";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Card from "../pages/Card";
import ProductLayout from "../layouts/ProductLayout/ProductLayout";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

const defaultRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product, layout: ProductLayout },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.login, component: Login, layout: LoginLayout },
  { path: config.routes.cart, component: Card, protected: true },
];

const adminRoutes = [
  { path: config.routes.homeAdmin, component: HomeAdmin, layout: AdminLayout },
];

export { defaultRoutes, adminRoutes };
