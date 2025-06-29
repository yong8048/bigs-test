import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import AuthStore from "../stores/AuthStore";
import { refresh } from "./auth";

// 중복 refresh 요청 방지
let isRefreshing = false;

const axiosInstance = axios.create({
  headers: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.baseURL = "https://front-mission.bigs.or.kr";
    const token = AuthStore.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = sessionStorage.getItem("refreshToken");

      if (refreshToken) {
        // 이미 refresh 중이면 대기
        if (isRefreshing) {
          // refresh 완료까지 대기
          while (isRefreshing) {
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          // refresh 완료 후 재시도
          const token = AuthStore.accessToken;
          if (token) {
            const originalRequest = error.config;
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          }
        }

        isRefreshing = true;
        try {
          const response = await refresh({ refreshToken });
          AuthStore.setAccessToken(response.accessToken);
          sessionStorage.setItem("refreshToken", response.refreshToken);

          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          AuthStore.clearAccessToken();
          sessionStorage.removeItem("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      } else {
        AuthStore.clearAccessToken();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

const axiosFormDataInstance = axios.create({
  headers: {
    "Content-Type": 'multipart/form-data; charset=utf-8"',
  },
});

axiosFormDataInstance.interceptors.request.use(
  (config) => {
    config.baseURL = "https://front-mission.bigs.or.kr";
    const token = AuthStore.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosFormDataInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = sessionStorage.getItem("refreshToken");

      if (refreshToken) {
        // 이미 refresh 중이면 대기
        if (isRefreshing) {
          // refresh 완료까지 대기
          while (isRefreshing) {
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          // refresh 완료 후 재시도
          const token = AuthStore.accessToken;
          if (token) {
            const originalRequest = error.config;
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosFormDataInstance(originalRequest);
          }
        }

        isRefreshing = true;
        try {
          const response = await refresh({ refreshToken });
          AuthStore.setAccessToken(response.accessToken);
          sessionStorage.setItem("refreshToken", response.refreshToken);

          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
          return axiosFormDataInstance(originalRequest);
        } catch (refreshError) {
          AuthStore.clearAccessToken();
          sessionStorage.removeItem("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      } else {
        AuthStore.clearAccessToken();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const Get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return await axiosInstance.get(url, config);
};

interface PostOptions {
  contentType?: string;
}

export const Post = async <T>(
  url: string,
  data?: Record<string, any> | string,
  options?: PostOptions
): Promise<AxiosResponse<T>> => {
  const config: AxiosRequestConfig = {};

  if (options?.contentType) {
    config.headers = { "content-type": options.contentType };
  } else {
    config.headers = { "content-type": "application/json" };
  }

  return await axiosInstance.post(url, data, config);
};

export const Patch = async <T>(
  url: string,
  data?: Record<string, any> | string,
  options?: PostOptions
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {};

  if (options?.contentType) {
    config.headers = { "content-type": options.contentType };
  } else {
    config.headers = { "content-type": "application/json" };
  }

  return await axiosInstance.patch(url, data, config);
};

export const Delete = async <T>(
  url: string,
  data?: Record<string, any> | string,
  options?: PostOptions
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {};

  if (options?.contentType) {
    config.headers = { "content-type": options.contentType };
  } else {
    config.headers = { "content-type": "application/json" };
  }

  return await axiosInstance.delete(url, {
    data: data,
    headers: config.headers,
  });
};
