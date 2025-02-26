import httpRequest from "../utils/httpRequest";

export const ApiCartUser = (userId) => httpRequest.get(`/cart/${userId}`);
