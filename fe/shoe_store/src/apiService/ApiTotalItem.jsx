import httpRequest from "../utils/httpRequest";

export const ApiTotalItem = (idUser) =>
  httpRequest.get(`cart/totalItem/${idUser}`);
