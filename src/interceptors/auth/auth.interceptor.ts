import useAuthStore from "@/store/auth.store";
import type { InternalAxiosRequestConfig } from "axios";

export const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
