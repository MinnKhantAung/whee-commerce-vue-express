import publicLayout from "../layouts/publicLayout.vue";
import backofficeLayout from "../layouts/backofficeLayout.vue";
import HomeView from "../views/public/HomeView.vue";
import { routeNames } from "./routeNames";
import LoginForm from "../views/form/LoginForm.vue";
import RegisterForm from "../views/form/RegisterForm.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import ProductListView from "../views/backoffice/product/ProductListView.vue";
import ProductDetailView from "../views/backoffice/product/ProductDetailView.vue";

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
        path: "/register",
        name: routeNames.registerForm,
        component: RegisterForm,
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
    children: [
      {
        path: "products",
        name: routeNames.productList,
        component: ProductListView,
      },
      {
        path: "product/:id",
        name: routeNames.productDetail,
        component: ProductDetailView,
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: routeNames.notFoundPage,
    component: NotFoundPage,
  },
];
