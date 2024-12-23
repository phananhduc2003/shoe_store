import config from "../config";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../login/Login";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Card from "../pages/Card";

const defaultRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.login, component: Login, layout: LoginLayout },
  { path: config.routes.cart, component: Card, protected: true },
];

const adminRoutes = [];

export { defaultRoutes, adminRoutes };
