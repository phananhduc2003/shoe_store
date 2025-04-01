import httpRequest from "../utils/httpRequest";
export const ApiPostProduct = (formData) =>
  httpRequest.post(`/homeAdmin/AddProduct`, formData);
