
import { isDev } from "helpers";
// import history from "router/history";

export function apiErrorHandler(err) {
  if (err.response) {
    switch (err.response.status) {
      case 500:
        isDev() && console.log(err);
        break;
      case 503:
        window.location.href = "/maintenance";
        return;
      case 404:
        window.location.href = "/404";
        return;
      case 401:
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/login";
        }, 600);
        break;
      default:
        break;
    }
    return err.response.data;
  }
  return new Error("Unexpected Error Occurred!");
}

export function apiSuccessHandler(res) {
  return res.data;
}