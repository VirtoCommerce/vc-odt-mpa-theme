import Vue from "vue";
import i18n from "@i18n";
import { AuthorizationPlugin } from "plugins/authorization/authorization.plugin";
import { FETCH_PROFILE } from "plugins/authorization/store-profile/definitions";
import { FeaturesPlugin } from 'plugins/features/features.plugin';
import store from "store";
import App from "@account/App.vue";
import router from "@account/router";
import draftsListModule from "@account/store/modules/drafts-list";
import invoicesListModule from "@account/store/modules/invoices-list";
import ordersListModule from "@account/store/modules/orders-list";
import paymentsListModule from "@account/store/modules/payments-list";
import usersListModule from "@account/store/modules/users-list";
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
