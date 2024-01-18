import { api } from "../services/apiService";

const urls = {
  login: "/users/login",
  register: "/users/register",
};

export const userLogin = (data, config) => {
  return api.post(urls.login, data, config);
};

export const userRegister = (data, config) => {
  return api.post(urls.register, data, config)
}
