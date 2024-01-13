import publicLayout from "../layouts/publicLayout.vue";
import backofficeLayout from "../layouts/backofficeLayout.vue";
import HomeView from "../views/public/HomeView.vue";
import { routeNames } from "./routeNames";
import LoginForm from "../views/form/LoginForm.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

export const routes = [
  {
    path: "/",
    component: publicLayout,
    children: [
      {
        path: "/login",
        name: routeNames.loginForm,
        component: LoginForm,
      },
      {
        path: "",
        name: routeNames.homeView,
        component: HomeView,
      },
    ],
  },
  {
    path: "/backoffice",
    component: backofficeLayout,
  },
  {
    path: "/:pathMatch(.*)*",
    name: routeNames.notFoundPage,
    component: NotFoundPage,
  },
];
