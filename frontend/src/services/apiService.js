import axios from "axios";
import { getBarear, isAuth } from "./authService";
import { reactive, toRefs } from "vue";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = isAuth() ? getBarear() : null;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const api = instance;

export const ApiStatus = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export const useApi = (callback) => {
  const result = reactive({
    status: ApiStatus.IDLE,
    response: null,
    error: null,
  });

  async function call(data, config) {
    result.status = ApiStatus.LOADING;
    try {
      const requestResponse = callback(data, config);
      result.response = requestResponse;
      result.status = ApiStatus.SUCCESS;
    } catch (error) {
      result.status = ApiStatus.ERROR;
    }
  }
  return { ...toRefs(result), call };
};
