import Vue from "vue";
import App from "@catalog/App.vue";
import initCommon from "@common/init.common"

initCommon();

new Vue({
  el: "#app",
  render: h => h(App)
});
