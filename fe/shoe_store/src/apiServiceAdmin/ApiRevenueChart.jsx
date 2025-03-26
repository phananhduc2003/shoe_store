import httpRequest from "../utils/httpRequest";
export const ApiRevenueChart = (startDate, endDate) => {
  return httpRequest.get("/api/revenue-by-orders", {
    params: {
      startDate: startDate,
      endDate: endDate,
    },
  });
};
