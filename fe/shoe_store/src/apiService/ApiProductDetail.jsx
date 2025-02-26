import httpRequest from "../utils/httpRequest";

export const ApiProductDetail = (productId) =>
  httpRequest.get(`/home/product/${productId}`);
