export default [
  {
    path: "/",
    name: "inicio",
    component: () => import("../views/inicioView.vue"),
    meta: { title: "Inicio" },
  },
];
