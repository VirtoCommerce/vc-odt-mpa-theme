import "@common/init-common"
import Vue from "vue";
import App from "@account/App.vue";
import router from "@account/router";
import store from "@account/store";
import i18n from "@i18n";
import InitializationService from '@common/initialization.service';



new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
