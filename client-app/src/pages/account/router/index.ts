import Vue from "vue";
import VueRouter from "vue-router";
import store from "@account/store";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountOrders from "@account/views/account-orders/index.vue";
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
      console.log(profile.permissions);
      const authResult = AuthorizationService.checkUserPermissions( profile, Permissions.CanViewOrders);
      next(authResult);
    }
  },
  {
    path: "/users",
    component: AccountUsers,
    beforeEnter: (to: any, from: any, next: any) => {
      const profile = store.getters["profileModule/profile"];
      console.log(profile.permissions);
      const authResult = AuthorizationService.checkUserPermissions( profile, Permissions.CanViewUsers);
      next(authResult);
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

export default router;
