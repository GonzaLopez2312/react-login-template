import { create } from "zustand";

interface AuthState {
  token: string | null; 
  setToken: (newToken: string) => void;
  removeToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,

  setToken: (newToken:string) => set({ token: newToken }),

  removeToken: () => set({ token: null }),
}));

export default useAuthStore;
