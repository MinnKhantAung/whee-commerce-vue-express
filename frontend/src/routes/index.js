import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { isAuth } from "../services/authService";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuth) next({ name: "Login" });
  else next();
});

export default router;
