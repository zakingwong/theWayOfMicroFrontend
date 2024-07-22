import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
    children: [
      {
        path: "/vue2",
        name: "vue2",
        component: () =>
          import(/* webpackChunkName: "vue2" */ "../views/vue2.vue"),
      },
      {
        path: "/react",
        name: "react",
        component: () =>
          import(/* webpackChunkName: "react" */ "../views/react.vue"),
      },
      {
        path: "/tradition",
        name: "tradition",
        component: () =>
          import(/* webpackChunkName: "tradition" */ "../views/tradition.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
