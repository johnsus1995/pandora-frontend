import api from "utils/api"

export const login = (data, options) => {
  return api({
    url: "/v1/auth/login",
    method: "POST",
    data,
    ...options,
  });
};

export const register = (data, options) => {
  return api({
    url: "/v1/auth/register/NMNJ2eA8KCW0LjuFno0f",
    method: "POST",
    data,
    ...options,
  });
};