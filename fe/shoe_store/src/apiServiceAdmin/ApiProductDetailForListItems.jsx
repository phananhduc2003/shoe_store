import httpRequest from "../utils/httpRequest";

export const ApiProductDetailForListItems = (productId) =>
  httpRequest.get(`/homeAdmin/${productId}`);
