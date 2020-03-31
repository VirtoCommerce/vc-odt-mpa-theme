import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@i18n";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountPayments from '@account/views/account-payments/index.vue';
import AccountUsers from "@account/views/account-users/index.vue";
import { accessDeniedUrl } from '@common/constants';
import Features from "@common/features"
import Permissions from "@common/permissions"

Vue.use(VueRouter);

// eslint-disable-next-line
const beforeEnterWithPermissions = (to: any, from: any, next: any, featureName: string, ...permissions: string[]) => {
  const authorizationResult = Vue.$can(...permissions);
  const isFeatureActiveResult = Vue.$isActive(featureName);
  if (authorizationResult && isFeatureActiveResult) {
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
    // eslint-disable-next-line
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Features.OrderBrowsing, Permissions.CanViewOrders);
    }
  },
  {
    path: "/users",
    component: AccountUsers,
    meta: {
      title: i18n.t('account.menu_titles.users')
    },
    // eslint-disable-next-line
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Features.ManageUsers, Permissions.CanViewUsers);
    }
  },
  {
    path: "/invoices",
    component: AccountInvoices,
    meta: {
      title: i18n.t('account.menu_titles.invoices')
    },
    // eslint-disable-next-line
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Features.InvoiceBrowsing, Permissions.CanViewOrders);
    }
  },
  {
    path: "/payments",
    component: AccountPayments,
    meta: {
      title: i18n.t('account.menu_titles.payments')
    },
    // eslint-disable-next-line
    beforeEnter: (to: any, from: any, next: any) => {
      beforeEnterWithPermissions(to, from, next, Features.PaymentBrowsing, Permissions.CanViewOrders);
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: window.location.pathname,
  routes
});

// eslint-disable-next-line
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ?
    toRoute.meta.title : i18n.t('account.menu_titles.home');
  next();
})

export default router;
