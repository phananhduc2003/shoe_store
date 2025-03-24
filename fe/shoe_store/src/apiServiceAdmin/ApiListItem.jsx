import httpRequest from "../utils/httpRequest";

export const ApiListItem = () => httpRequest.get("/home/product");
