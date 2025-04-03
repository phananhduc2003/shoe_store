import httpRequest from "../utils/httpRequest";
export const ApiResultVnPay = (query) =>
  httpRequest.get(`api/payment/vnpay-return${query}`);
