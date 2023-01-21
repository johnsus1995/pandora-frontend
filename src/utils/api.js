import axios from "axios";
import config from "../config";
import Qs from "qs";
import generatePath from "./genPath";
import { apiErrorHandler, apiSuccessHandler } from "helpers/responseHandler";

let customAxios = axios.create({
  baseURL: config.API_URL,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: "brackets",
    });
  },
});

customAxios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("u_tok");

    config.headers = {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...config.headers,
    };

    if (config.query) {
      config.url = generatePath(config.url, config.query);
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(apiSuccessHandler, apiErrorHandler);

export default customAxios;
