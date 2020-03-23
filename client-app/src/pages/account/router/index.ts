import Vue from "vue";
import VueRouter from "vue-router";
//import store from "@account/store";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountPayments from '@account/views/account-payments/index.vue';
import AccountUsers from "@account/views/account-users/index.vue";
import Permissions from "@common/permissions"
import AuthorizationService from '@common/services/authorization.service';
import store from "@init-app/store";

Vue.use(VueRouter);


const beforeEnterWithPermissions = (to: any, from: any, next: any, ...permissions: string[]) => {
  // const profile = store.getters["profileModule/profile"];
  const authResult = AuthorizationService.checkUserPermissions( ...permissions);
  if(authResult){
    next();
  } else {
    window.location.assign(`${window.BASE_URL}error/AccessDenied`);
  }
}

const routes = [
  {
    path: "/",
    component: AccountInfo },
  {
    path: "/orders",
    component: AccountOrders,
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to,from,next, Permissions.CanViewOrders);
    }
  },
  {
    path: "/users",
    component: AccountUsers,
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to,from,next, Permissions.CanViewUsers);
    }
  },
  {
    path: "/invoices",
    component: AccountInvoices,
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to,from,next, Permissions.CanViewOrders);
    }
  },
  {
    path: "/payments",
    component: AccountPayments,
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to,from,next, Permissions.CanViewOrders);
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

export default router;
