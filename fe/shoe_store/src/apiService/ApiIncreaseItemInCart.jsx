import httpRequest from "../utils/httpRequest";
export const ApiIncreaseItemInCart = ({ idUser, idProduct }) =>
  httpRequest.put(`/cart/increase?userId=${idUser}&productId=${idProduct}`);
