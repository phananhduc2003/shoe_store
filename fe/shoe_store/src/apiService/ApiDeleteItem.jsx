import httpRequest from "../utils/httpRequest";

export const ApiDeleteItem = (userId, productId) =>
  httpRequest.delete(`/cart/deleteItem/${userId}/${productId}`);
