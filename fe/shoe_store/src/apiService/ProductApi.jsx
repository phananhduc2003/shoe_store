import httpRequest from "../utils/httpRequest";

export const ProductApi = ({
  brandIds = "",
  purposeIds = "",
  page = "",
  size = "",
}) =>
  httpRequest.get(
    `product/filter?brandIds=${brandIds}&purposeIds=${purposeIds}&page=${page}&size=${size}`
  );
