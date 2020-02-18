import Vue from "vue";
import i18n from "@i18n";
import "styles/default.scss";
import ErrorInfo from '@common/models/error-info.model';
import InitializationService from '@common/services/initialization.service';
import App from "@init-app/App.vue";
import store from "@init-app/store";
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
