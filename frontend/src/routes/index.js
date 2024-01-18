import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { isAuth } from "../services/authService";
import { routeNames } from "./routeNames";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== routeNames.loginForm && to.meta.requiresAuth && !isAuth()) {
    next({ name: routeNames.loginForm });
  } else if (
    (to.name == routeNames.loginForm || to.name == routeNames.registerForm) &&
    isAuth()
  ) {
    next({ name: routeNames.productList });
  } else next();
});

export default router;
