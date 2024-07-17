import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home.vue"),
    children: [
      {
        path: "/vue2",
        name: "vue2",
        component: () => <div id="vue2">vue2</div>,
      },
      {
        path: "/react",
        name: "react",
        component: () => <div id="react">react</div>,
      },
      {
        path: "/tradition",
        name: "tradition",
        component: () => <div id="tradition">tradition</div>,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
