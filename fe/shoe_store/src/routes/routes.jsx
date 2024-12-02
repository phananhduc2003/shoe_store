import config from "../config";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";

const defaultRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
  { path: config.routes.productdetail, component: ProductDetail },
];

const adminRoutes = [];

export { defaultRoutes, adminRoutes };
