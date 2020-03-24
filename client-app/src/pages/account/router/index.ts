import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@i18n";
import AccountInfo from "@account/views/account-info/index.vue";
import AccountInvoices from '@account/views/account-invoices/index.vue';
import AccountOrders from "@account/views/account-orders/index.vue";
import AccountPayments from '@account/views/account-payments/index.vue';
import AccountUsers from "@account/views/account-users/index.vue";

Vue.use(VueRouter);

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
    }
  },
  {
    path: "/users",
    component: AccountUsers,
    meta: {
      title: i18n.t('account.menu_titles.users')
    }
  },
  {
    path: "/invoices",
    component: AccountInvoices,
    meta: {
      title: i18n.t('account.menu_titles.invoices')
    }
  },
  {
    path: "/payments",
    component: AccountPayments,
    meta: {
      title: i18n.t('account.menu_titles.payments')
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
