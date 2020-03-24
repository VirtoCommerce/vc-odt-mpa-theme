import Vue from "vue";
import i18n from "@i18n";
import "bootstrap/js/src";
import "styles/default.scss";
import "vue-loading-overlay/dist/vue-loading.css";
import { ADD_ERROR } from 'pages/init/store/definitions';
import ErrorInfo from 'pages/init/store/types';
//import store from "store";
import InitializationService from '@common/services/initialization.service';
import App from "@init-app/App.vue";
import store from './store';

InitializationService.initializeCommon();

window.onerror = (message, source, line, column, error) => {
  store.dispatch(ADD_ERROR, new ErrorInfo(message, source, line, column, error));
};

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount("#initApp");

