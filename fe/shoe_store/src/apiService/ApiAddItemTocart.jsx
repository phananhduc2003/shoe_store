import httpRequest from "../utils/httpRequest";

export const ApiAddItemToCart = ({ idUser, id, quantityItem }) =>
  httpRequest.post(
    `/cart/addToCart?userId=${idUser}&productId=${id}&quantity=${quantityItem}`
  );
