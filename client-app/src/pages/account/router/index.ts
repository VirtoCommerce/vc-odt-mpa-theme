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
      console.log(profile.permissions);
      const authResult = AuthorizationService.checkUserPermissions( profile, Permissions.CanViewUsers);
      if(authResult){
        next();
      } else {
        window.location.assign(`${window.BASE_URL}error/AccessDenied`);
      }
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

export default router;
