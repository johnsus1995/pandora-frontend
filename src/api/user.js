import api from "utils/api"

export const create = (config = {}) => {
    const { data, options } = config;
    return api({
      url: "/v1/user",
      method: "POST",
      data,
      ...options,
    });
  };

  export const get = (config = {}) => {
    const { data, options } = config;
    return api({
      url: "/v1/user/:hash",
      method: "GET",
      data,
      ...options,
    });
  };