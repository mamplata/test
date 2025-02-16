import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/TaskList.vue"),
  },
  {
    path: "/add",
    component: () => import("../components/CreateOrder.vue"),
  },
  {
    path: "/edit/:id",
    component: () => import("../components/EditOrder.vue"),
    props: (route) => ({ orderId: Number(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
