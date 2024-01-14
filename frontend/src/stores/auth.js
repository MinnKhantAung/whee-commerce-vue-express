import { defineStore } from "pinia";
import { getAuthUser, isAuth, storeUser } from "../services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: getAuthUser() || null,
    isAuth: isAuth || false,
  }),
  actions: {
    storeAuth(user, token) {
      storeUser(user, token);
      this.user = user;
      this.isAuth = true;
    },
    removeAuth() {
      this.user = null;
    },
  },
});
