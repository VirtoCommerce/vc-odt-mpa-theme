import Vue from "vue";
import VueRouter from "vue-router";
import AccountInfo from "@account/views/AccountInfo.vue";
import AccountOrders from "@account/views/AccountOrders.vue";
import AccountUsers from "@account/views/AccountUsers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AccountInfo },
  {
    path: "/orders",
    component: AccountOrders
  },
  {
    path: "/users",
    component: AccountUsers
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

export default router;
