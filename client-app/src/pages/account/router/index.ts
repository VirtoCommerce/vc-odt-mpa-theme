import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@i18n";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountPayments from '@account/views/account-payments/index.vue';
import AccountUsers from "@account/views/account-users/index.vue";
import { accessDeniedUrl } from '@common/constants';
import Permissions from "@common/permissions"
import Services from "@common/services"

Vue.use(VueRouter);


const beforeEnterWithPermissions = (to: any, from: any, next: any, serviceName: string, ...permissions: string[]) => {
  const authorizationResult = Vue.$can(...permissions);
  const isServiceActiveResult = Vue.$isActive(serviceName);
  if (authorizationResult && isServiceActiveResult) {
    next();
  } else {
    window.location.assign(accessDeniedUrl);
  }
}

const routes = [
  {
    path: "/",
    component: AccountInfo,
    meta: {
      title: i18n.t('account.menu_titles.home')
    }
  },
  {
    path: "/orders",
    component: AccountOrders,
    meta: {
      title: i18n.t('account.menu_titles.orders')
    },
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Services.OrderBrowsing, Permissions.CanViewOrders);
    }
  },
  {
    path: "/users",
    component: AccountUsers,
    meta: {
      title: i18n.t('account.menu_titles.users')
    },
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Services.ManageUsers, Permissions.CanViewUsers);
    }
  },
  {
    path: "/invoices",
    component: AccountInvoices,
    meta: {
      title: i18n.t('account.menu_titles.invoices')
    },
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Services.InvoiceBrowsing, Permissions.CanViewOrders);
    }
  },
  {
    path: "/payments",
    component: AccountPayments,
    meta: {
      title: i18n.t('account.menu_titles.payments')
    },
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Services.PaymentBrowsing, Permissions.CanViewOrders);
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ?
    toRoute.meta.title : i18n.t('account.menu_titles.home');
  next();
})

export default router;
