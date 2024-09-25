import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";

import AuthRouter from "./auth.js"
import RestauranteRouter from "./Restaurante.js";

const routes = [
  ...AuthRouter,
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/restaurantes",
    name: "restaurantes",
    redirect: "/restaurantes/listar_restaurantes",
    component: HomeView,
    meta: { title: "Restaurantes" },
    children: [...RestauranteRouter],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
