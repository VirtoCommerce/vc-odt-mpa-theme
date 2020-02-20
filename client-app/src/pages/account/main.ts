import Vue from "vue";
import i18n from "@i18n";
import App from "@account/App.vue";
import router from "@account/router";
import store from "@account/store";
import InitializationService from '@common/services/initialization.service';

InitializationService.initializeCommon();

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
