import httpRequest from "../utils/httpRequest";

export const ApiVnPay = (amount, orderInfo) => {
  return httpRequest.get("/api/payment/create-vnpay", {
    params: {
      amount: amount,
      orderInfo: orderInfo,
    },
  });
};
