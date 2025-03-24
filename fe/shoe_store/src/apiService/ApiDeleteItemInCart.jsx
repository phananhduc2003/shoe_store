import httpRequest from "../utils/httpRequest";

export const ApiDeleteItemInCart = (userId, productId) =>
  httpRequest.delete(`/cart/deleteItem/${userId}/${productId}`);
