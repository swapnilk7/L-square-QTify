import axios from "axios";

const baseURL =
  process.env.REACT_APP_BACKEND_URL || "https://qtify-backend-labs.crio.do";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000000,
});

axiosInstance.interceptors.request.use((request) => {
  if (
    request.method !== "get" &&
    request.method !== "head" &&
    navigator?.serviceWorker?.controller
  ) {
    if (request.data instanceof FormData) {
      navigator?.serviceWorker?.controller?.postMessage({
        body: `${JSON.stringify(request.data)}`,
      });
    } else {
      navigator?.serviceWorker?.controller?.postMessage({ body: request.data });
    }
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;
