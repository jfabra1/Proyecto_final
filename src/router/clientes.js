export default [
    {
      path: "listar_clientes",
      name: "listar_clientes",
      component: () => import("../views/clientesView.vue"),
      meta: { title: "Clientes"},
    },
  ];