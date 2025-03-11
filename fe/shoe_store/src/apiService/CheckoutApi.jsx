import httpRequest from "../utils/httpRequest";

export const CheckOutApi = (userId, formData) =>
  httpRequest.post(`/checkout/${userId}`, formData);
