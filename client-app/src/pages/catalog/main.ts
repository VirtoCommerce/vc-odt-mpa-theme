import Vue from "vue";
import App from "@catalog/App.vue";
import InitializationService from '@common/services/initialization.service';

InitializationService.initializeCommon();

new Vue({
  el: "#app",
  render: h => h(App)
});
