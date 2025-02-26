import httpRequest from "../utils/httpRequest";
export const ApiDecreaseItemInCart = ({ idUser, idProduct }) =>
  httpRequest.put(`/cart/decrease?userId=${idUser}&productId=${idProduct}`);
