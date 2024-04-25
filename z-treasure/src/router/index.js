import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const loginC = {
  path: "/login",
  component: () => import("@/views/login/index"),
};

const contentRouter = [
  {
    path: "order",
    component: () => import("@/views/order/index"),
  },
  {
    path: "customer",
    component: () => import("@/views/customer/index"),
  },
];

const dashboardC = {
  path: "/",
  component: () => import("@/views/dashboard/index"),
  children: [...contentRouter],
};

const routes = [loginC, dashboardC];

const router = new VueRouter({
  routes,
});

export default router;
