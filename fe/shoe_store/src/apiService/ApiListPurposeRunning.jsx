import httpRequest from "../utils/httpRequest";

export const ApiListPurposeRunning = () =>
  httpRequest.get(`home/product/purpose?purposeId=1`);
