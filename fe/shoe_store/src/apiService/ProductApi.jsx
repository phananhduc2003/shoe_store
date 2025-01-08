import httpRequest from "../utils/httpRequest";

export const ProductApi = ({ brandIds = "", purposeIds = "" }) =>
  httpRequest.get(
    `product/filter?brandIds=${brandIds}&purposeIds=${purposeIds}`
  );
