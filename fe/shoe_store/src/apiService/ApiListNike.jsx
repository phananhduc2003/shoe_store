import httpRequest from "../utils/httpRequest";

export const ApiListNike = () =>
  httpRequest.get(`/home/product/brand?brandId=1`);
