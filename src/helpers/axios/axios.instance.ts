import { AUTH_KEY } from "@/service/storeUserInfo";
import { IErrorResponse, ISuccessResponse } from "@/types";
import { getFromLocalStorage } from "@/utils/local_storage";
import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// interceptors work here... send accesstoken for private route.
axios.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(AUTH_KEY);

    // send accesstoken as headers
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

axios.interceptors.response.use(
  //@ts-expect-error as @ts-ignore
  function (response) {
    const responseObject: ISuccessResponse = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    const responseObject:IErrorResponse = {
      statusCode: error.response?.data?.statusCode || 500,
      message: error.response?.data?.message || "something went wrong !!",
      errorMessage: error.response?.data?.message,
    }
    return responseObject
    // return Promise.reject(error);
  }
);

export { axiosInstance };
