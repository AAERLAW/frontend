import axios from "axios";
import { storagePrefix, storageToken, storageRefeshToken } from "./constant";
import { endpoint } from "./config";

const fetch = (options) => {
  const AuthToken = localStorage.getItem(storageToken);

  let { method = "get", data, url, formatData, token } = options;

  if (AuthToken || token) {
    axios.defaults.headers.common.Authorization = token
      ? token
      : `Bearer ${AuthToken}`;
  }

  if (formatData && method.toLowerCase() !== "get") {
    data = {
      meta: { source: "web" },
      data: data,
    };
  }

  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, {
        params: data,
      });
    case "delete":
      return axios.delete(url, {
        data: data,
      });
    case "post":
      switch (options.upload) {
        case true:
          return axios.post(url, options.formData, options.config);
        default:
          return axios.post(url, data);
      }
    case "put":
      return axios.put(url, data);
    case "patch":
      return axios.patch(url, data);
    default:
      return axios(options);
  }
};

const refreshAction = async ({ options, statusCode, response }) => {
  console.log("fetch new token");
  let authRefresh = localStorage.getItem(storageRefeshToken);
  const new_axios = axios;
  console.log({ authRefresh });
  await (new_axios.defaults.headers.common.Authorization = `Bearer ${authRefresh}`);
  let refreshURL = `${endpoint}/auth/refreshtoken`;

  return await new_axios
    .post(refreshURL, {
      meta: { source: "web" },
      data: {},
    })
    .then((resp) => {
      let refreshData = resp.data ? resp.data : {};
      console.log(refreshData);
      // let newToken = refreshData.accessToken;
      // localStorage.setItem(storageToken, newToken);
      // return request(options);
    })
    .catch((error) => {
      let errResponse = error.response;
      let errStatus = errResponse.status;

      if (errStatus === 401 || errStatus === 404) {
        // localStorage.clear();
      }
      return {
        success: false,
        statusCode,
        message: response?.data?.meta?.info
          ? response?.data?.meta?.info
          : "Network Error",
        raw: response?.data,
        meta: response?.data?.meta,
      };
    });
};

export default function request(options) {
  return fetch(options)
    .then((response) => {
      const { statusText, status, headers } = response;
      let data =
        options.fetchType === "YQL"
          ? response.data.query.results.json
          : response.data;
      return {
        headers: headers,
        success: true,
        message: statusText,
        statusCode: status,
        raw: data,
        ...data,
      };
    })
    .catch((err) => {
      const { response } = err;
      let msg;
      let statusCode;
      if (response && response instanceof Object) {
        const { data, statusText } = response;
        statusCode = response.status;
        console.log(response);
        const infoText = data?.meta?.info;
        if (statusCode === 401 && infoText === "expired token") {
          refreshAction({ options, statusCode, response });
        }
        msg = data.message || statusText;
      } else {
        statusCode = 600;
        msg = err.message || "Network Error";
      }

      console.log("data", response?.data);
      return {
        success: false,
        statusCode,
        message: response?.data?.meta?.info ? response?.data?.meta?.info : msg,
        raw: response?.data,
        meta: response?.data?.meta,
      };
    });
}
