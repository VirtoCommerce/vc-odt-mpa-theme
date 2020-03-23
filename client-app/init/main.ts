import Vue from "vue";
import i18n from "./node_modules/@i18n";
import "./node_modules/bootstrap/js/src";
import "./node_modules/styles/default.scss";
import "./node_modules/vue-loading-overlay/dist/vue-loading.css";
import InitializationService from './node_modules/@common/services/initialization.service';
import App from "./node_modules/@init-app/App.vue";
import store from "./node_modules/@init-app/store";
import ErrorInfo from './node_modules/@init-app/store/types';
import { ADD_ERROR } from './store/definitions';

window.onerror = (message, source, line, column, error) => {
  store.dispatch(ADD_ERROR, new ErrorInfo(message, source, line, column, error));
};

InitializationService.initializeCommon();

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount("#initApp");
