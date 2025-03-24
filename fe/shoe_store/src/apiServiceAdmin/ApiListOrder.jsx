import httpRequest from "../utils/httpRequest";

export const ApiListOrder = () => httpRequest.get("/homeAdmin/listOrder");
