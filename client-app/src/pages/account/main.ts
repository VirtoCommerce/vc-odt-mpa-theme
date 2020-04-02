import Vue from "vue";
import i18n from "@i18n";
import { AuthorizationPlugin } from "plugins/authorization/authorization.plugin";
import { FETCH_PROFILE } from "plugins/authorization/store-profile/definitions";
import { FeaturesPlugin } from 'plugins/features/features.plugin';
import App from "@account/App.vue";
import router from "@account/router";
import store from "@account/store";
import InitializationService from "@common/services/initialization.service";

InitializationService.initializeCommon();

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
