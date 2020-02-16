import Vue from "vue";
import VueRouter from "vue-router";
import AccountOrders from "@account/views/AccountOrders.vue";
import AccountInfo from "@account/views/AccountInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AccountInfo },
  {
    path: "/orders",
    component: AccountOrders
  }
];

const router = new VueRouter({
  mode: "history",
  base: window.location.pathname,
  routes
});

export default router;
