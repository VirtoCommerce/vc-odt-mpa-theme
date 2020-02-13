import Vue from "vue";
import i18n from "@i18n";
import "styles/default.scss";
import "bootstrap";
import InitializationService from '@common/services/initialization.service';
import App from "@pages/common/App.vue";

InitializationService.initializeCommon();

Vue.config.errorHandler = (err) => {
  throw err;
};

Vue.config.warnHandler = (msg, vue, trace) => {
  // todo
};

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#common");
