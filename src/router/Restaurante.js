export default [
  {
    path: "listar_restaurantes",
    name: "listar_restaurantes",
    component: () => import("../views/restauranteView.vue"),
    meta: { title: "Restaurantes" },
  },
];