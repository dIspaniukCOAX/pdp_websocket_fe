import Axios, { AxiosError, AxiosRequestConfig, RawAxiosRequestConfig } from "axios";
import i18next from "i18next";

import { queryClient } from "@/providers";

import { getJWTToken, removeJWTToken, setJWTToken } from "@/helpers";

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

axios.interceptors.request.use(
  (config) => {
    const token = getJWTToken();
    const lang = i18next.language;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (typeof config.params === "undefined" || !config.params.lang) {
      config.params = config.params || {};
      config.params.lang = lang;
    }

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    const logout = () => {
      removeJWTToken();
      queryClient.clear();

      window.location.href = "/auth/sign-in";
    };

    if ([401].indexOf(error.request.status) > -1) {
      logout();
    }

    if ([403].indexOf(error.request.status) > -1) {
      originalRequest._retry = true;

      try {
        const request = await axios.get("/auth/refresh");
        const token = request.data.jwtToken;

        setJWTToken(token);
        originalRequest.headers.Authorization = `Bearer ${token}`;

        return axios(originalRequest);
      } catch (_error) {
        logout();
      }
    }

    return Promise.reject(error);
  }
);

async function get<Resp = any>(
  url: string,
  params?: any,
  config?: RawAxiosRequestConfig
): Promise<Resp> {
  return new Promise<Resp>((resolve, reject) => {
    axios
      .get<Resp>(url, { params, ...config })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function post<Req = any, Resp = any>(
  url: string,
  payload?: Req,
  config?: RawAxiosRequestConfig
): Promise<Resp> {
  return new Promise<Resp>((resolve, reject) => {
    axios
      .post<Resp>(url, payload, config)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function patch<Req = any, Resp = any>(
  url: string,
  payload?: Req,
  config?: RawAxiosRequestConfig
): Promise<Resp> {
  return new Promise<Resp>((resolve, reject) => {
    axios
      .patch<Resp>(url, payload, config)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function put<Req = any, Resp = any>(url: string, payload?: Req): Promise<Resp> {
  return new Promise<Resp>((resolve, reject) => {
    axios
      .put<Resp>(url, payload)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function del<Resp = any>(url: string, config?: AxiosRequestConfig): Promise<Resp> {
  return new Promise<Resp>((resolve, reject) => {
    axios
      .delete<Resp>(url, config)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
}

export const api = { get, post, put, patch, del, axiosInstance: axios };
