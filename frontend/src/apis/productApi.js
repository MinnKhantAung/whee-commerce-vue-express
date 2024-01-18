import { api } from "../services/apiService";

const urls = {
  getList: "/products",
};

export const getList = (config) => {
  return api.get(urls.getList, config);
};
