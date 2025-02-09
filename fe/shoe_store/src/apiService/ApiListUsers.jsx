import httpRequest from "../utils/httpRequest";

export const ApiListUsers = () => httpRequest.get(`/users`);
