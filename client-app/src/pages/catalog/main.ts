import Vue from "vue";
import InitializationService from '@common/services/initialization.service';
import App from "@catalog/App.vue";

InitializationService.initializeCommon();

new Vue({
  el: "#app",
  render: h => h(App)
});
