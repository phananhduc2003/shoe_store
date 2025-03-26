import httpRequest from "../utils/httpRequest";

export const ApiTopSellingChart = (startDate, endDate) => {
  return httpRequest.get("/api/top-selling-products", {
    params: {
      startDate: startDate,
      endDate: endDate,
    },
  });
};
