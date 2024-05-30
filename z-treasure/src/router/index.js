import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const loginC = {
  path: "/login",
  component: () => import("@/views/login/index"),
};

const contentRouter = [
  {
    path: "workbench",
    component: () => import("@/views/workbench"),
  },
  {
    path: "order",
    component: () => import("@/views/order/index"),
  },
  {
    path: "/order-create",
    component: () => import("@/views/order/create"),
  },
  {
    path: "/order-detail",
    component: () => import("@/views/order/detail"),
  },
  {
    path: "customer",
    component: () => import("@/views/customer/index"),
  },
  {
    path: "/customer-create",
    component: () => import("@/views/customer/create"),
  },
  {
    path: "/customer-detail",
    component: () => import("@/views/customer/detail"),
  },
  {
    path: "design",
    component: () => import("@/views/design-create/index"),
  },
  {
    path: "exhibit",
    component: () => import("@/views/exhibit-show/index"),
  },
];

const dashboardC = {
  path: "/",
  redirect: "workbench",
  component: () => import("@/views/dashboard/index"),
  children: [...contentRouter],
};

const routes = [loginC, dashboardC];

const router = new VueRouter({
  routes,
});

export default router;
