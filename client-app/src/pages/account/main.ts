import Vue from "vue";
import i18n from "@i18n";
import ordersListModule from "libs/order/store/orders-list";
import usersListModule from "libs/user/store/users-list";
import { AuthorizationPlugin } from "plugins/authorization/authorization.plugin";
import { FETCH_PROFILE } from "plugins/authorization/store-profile/definitions";
import { FeaturesPlugin } from 'plugins/features/features.plugin';
import store from "store";
import App from "@account/App.vue";
import router from "@account/router";
import draftsListModule from "@account/store/modules/drafts-list";
import invoicesListModule from "@account/store/modules/invoices-list";
import paymentsListModule from "@account/store/modules/payments-list";
import InitializationService from "@common/services/initialization.service";

InitializationService.initializeCommon();

store.registerModule("invoicesListModule", invoicesListModule);
store.registerModule("ordersListModule", ordersListModule);
store.registerModule("paymentsListModule", paymentsListModule);
store.registerModule("usersListModule", usersListModule);
store.registerModule("draftsListModule", draftsListModule);

//custom plugins
Vue.use(AuthorizationPlugin, {store});
Vue.use(FeaturesPlugin);

store.dispatch(`profileModule/${FETCH_PROFILE}`).then(() =>{

  new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

});
