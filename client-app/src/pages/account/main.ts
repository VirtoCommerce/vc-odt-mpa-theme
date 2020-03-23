import Vue from "vue";
import i18n from "@i18n";
import store from "store";
import { FETCH_PROFILE } from 'store/modules/profile/definitions';
import App from "@account/App.vue";
import router from "@account/router";
import invoicesListModule from "@account/store/modules/invoices-list";
import ordersListModule from "@account/store/modules/orders-list";
import paymentsListModule from "@account/store/modules/payments-list";
import usersListModule from "@account/store/modules/users-list";
import InitializationService from '@common/services/initialization.service';

InitializationService.initializeCommon();


store.registerModule("ordersListModule", ordersListModule);
store.registerModule("usersListModule", usersListModule);
store.registerModule("invoicesListModule", invoicesListModule);
store.registerModule("paymentsListModule", paymentsListModule);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

