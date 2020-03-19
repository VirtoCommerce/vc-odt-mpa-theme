import Vue from "vue";
import VueRouter from "vue-router";
import store from "@account/store";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountPayments from '@account/views/account-payments/index.vue';
import AccountUsers from "@account/views/account-users/index.vue";
import { User } from '@common/api/api-clients';
import Permissions from "@common/permissions"
import AuthorizationService from '@common/services/authorization.service';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AccountInfo },
  {
    path: "/orders",
    component: AccountOrders,
    beforeEnter: (to: any, from: any, next: any) => {
      const profile = store.getters["profileModule/profile"];
      const authResult = AuthorizationService.checkUserPermissions( profile, Permissions.CanViewOrders);
      if(authResult){
        next();
      } else {
        window.location.assign(`${window.BASE_URL}error/AccessDenied`);
      }
    }
  },
  {
    path: "/users",
    component: AccountUsers,
    beforeEnter: (to: any, from: any, next: any) => {
      const profile = store.getters["profileModule/profile"];
      const authResult = AuthorizationService.checkUserPermissions( profile, Permissions.CanViewUsers);
      if(authResult){
        next();
      } else {
        window.location.assign(`${window.BASE_URL}error/AccessDenied`);
      }
    }
  },
  {
    path: "/invoices",
    component: AccountInvoices
  },
  {
    component: AccountPayments
    path: "/payments",
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

export default router;
