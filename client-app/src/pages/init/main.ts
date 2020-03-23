import Vue from "vue";
import i18n from "@i18n";
import "bootstrap/js/src";
import "styles/default.scss";
import "vue-loading-overlay/dist/vue-loading.css";
import { ADD_ERROR } from 'pages/init/store/definitions';
import ErrorInfo from 'pages/init/store/types';
import store from "store";
import { FETCH_PROFILE } from 'store/modules/profile/definitions';
import InitializationService from '@common/services/initialization.service';
import App from "@init-app/App.vue";
import initModule from './store';

InitializationService.initializeCommon();

store.registerModule("initModule", initModule);

window.onerror = (message, source, line, column, error) => {
  store.dispatch(ADD_ERROR, new ErrorInfo(message, source, line, column, error));
};


store.dispatch(`profileModule/${FETCH_PROFILE}`).then(() =>{

  new Vue({
    i18n,
    store,
    render: h => h(App)
  }).$mount("#initApp");

});
