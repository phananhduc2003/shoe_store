import httpRequest from "../utils/httpRequest";
export const ApiPutProduct = (id, formData) => {
  return httpRequest.put(`/homeAdmin/PutProduct/${id}`, formData);
};
