const routes = {
  home: "/",
  product: "/product/filter",
  productDetail: "/productDetail/:id",
  login: "/login",
  register: "/register",
  cart: "/cart/:idUser",
  checkout: "/checkout/:idUser",
  successCheckOut: "/successCheckOut",
  homeAdmin: "/homeAdmin/",
  listItems: "/homeAdmin/listItems",
  listOrders: "/homeAdmin/listOrders",
  listUsers: "/homeAdmin/listUsers",
  retrieveProduct: "/homeAdmin/retrieveProduct/:id",
};

export default routes;
