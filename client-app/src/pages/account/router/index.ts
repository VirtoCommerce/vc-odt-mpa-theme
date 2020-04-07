import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@i18n";
import FeatureNames from "plugins/features/featureNames"
import AccountDrafts from '@account/views/account-drafts/index.vue';
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountPayments from '@account/views/account-payments/index.vue';
import AccountUsers from "@account/views/account-users/index.vue";
import { accessDeniedUrl } from '@common/constants';
import Permissions from "@common/permissions"

Vue.use(VueRouter);

// eslint-disable-next-line
const isPermitted = (featureName: string, ...permissions: string[]) => {
  const authorizationResult = Vue.$can(...permissions);
  const isFeatureActiveResult = Vue.$isActive(featureName);
  return authorizationResult && isFeatureActiveResult;
}

const accessHandler = (permitted: boolean, next: any) => {
  if (permitted) {
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
      const permitted = isPermitted(FeatureNames.OrderBrowsing, Permissions.CanViewOrders)
      accessHandler(permitted, next);
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
      const permitted = isPermitted(FeatureNames.ManageUsers, Permissions.CanViewUsers);
      accessHandler(permitted, next);
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
      const permitted = isPermitted(FeatureNames.InvoiceBrowsing, Permissions.CanViewOrders);
      accessHandler(permitted, next);
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
      const permitted = isPermitted(FeatureNames.PaymentBrowsing, Permissions.CanViewOrders);
      accessHandler(permitted, next);
    }
  },
  {
    path: "/drafts",
    component: AccountDrafts,
    meta: {
      title: i18n.t('account.menu_titles.drafts')
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
