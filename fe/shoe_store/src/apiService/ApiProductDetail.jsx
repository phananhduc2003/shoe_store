import httpRequest from "../utils/httpRequest";

export const ApiProductDetail = (id) => httpRequest.get(`/home/product/${id}`);
