import { api } from "../services/apiService";

const urls = {
  login: "/login",
  register: "/register",
};

export const userLogin = (data, config) => {
  return api.post(urls.login, data, config);
};
