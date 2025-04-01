import httpRequest from "../utils/httpRequest";

export const ApiDeleteProduct = (ProductId) =>
  httpRequest.delete(`/Delete/Product/${ProductId}`);
