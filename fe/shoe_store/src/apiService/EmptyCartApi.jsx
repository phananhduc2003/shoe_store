import httpRequest from "../utils/httpRequest";

export const EmptyCartApi = (userId) =>
  httpRequest.put(`/cart/emptyCart/${userId}`);
