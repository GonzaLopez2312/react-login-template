import type { User } from "@/models/user.model";
import api from "@/services/api.service";
import useAuthStore from "@/store/auth.store";


export const login = async (user: User) => {
  const response = await api.post("/auth/login", user);
  useAuthStore.getState().setToken(response.data.token);
  if (!response.data.token) {
    throw new Error("Token was not received");
  }
};
