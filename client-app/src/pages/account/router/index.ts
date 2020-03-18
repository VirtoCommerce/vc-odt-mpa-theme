import Vue from "vue";
import VueRouter from "vue-router";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountUsers from "@account/views/account-users/index.vue";

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
  },
  {
    path: "/invoices",
    component: AccountInvoices
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

export default router;
