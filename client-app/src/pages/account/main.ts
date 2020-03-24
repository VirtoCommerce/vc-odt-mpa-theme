import Vue from "vue";
import i18n from "@i18n";
import { AuthorizationPlugin } from 'plugins/authorization/authorization.plugin';
import { FETCH_PROFILE } from 'plugins/authorization/store-profile/definitions';
import App from "@account/App.vue";
import router from "@account/router";
import store from "@account/store";
import invoicesListModule from "@account/store/modules/invoices-list";
import ordersListModule from "@account/store/modules/orders-list";
import paymentsListModule from "@account/store/modules/payments-list";
import usersListModule from "@account/store/modules/users-list";
import InitializationService from '@common/services/initialization.service';

InitializationService.initializeCommon();


//custom plugins
Vue.use(AuthorizationPlugin, {store});

store.registerModule("ordersListModule", ordersListModule);
store.registerModule("usersListModule", usersListModule);
store.registerModule("invoicesListModule", invoicesListModule);
store.registerModule("paymentsListModule", paymentsListModule);

store.dispatch(`profileModule/${FETCH_PROFILE}`).then(() =>{

  new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

});
