import httpRequest from "../utils/httpRequest";
export const ApiRegister = async (formData) => {
  httpRequest.post("/register", formData);
};
