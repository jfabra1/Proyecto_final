import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";

import AuthRouter from "./auth.js"
import ClientesRouter from "./clientes.js";

const routes = [
  ...AuthRouter,
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/clientes",
    name: "clientes",
    redirect: "/clientes/listar_clientes",
    component: HomeView,
    meta: { title: "Clientes",},
    children: [...ClientesRouter],
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
