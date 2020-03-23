import Vue from "vue";
import i18n from "@i18n";
import "bootstrap/js/src";
import "styles/default.scss";
import "vue-loading-overlay/dist/vue-loading.css";
import InitializationService from '@common/services/initialization.service';
import App from "@init-app/App.vue";
import store from "@init-app/store";
import { ADD_ERROR } from '@init-app/store/definitions';
import { FETCH_PROFILE } from '@init-app/store/modules/profile/definitions';
import ErrorInfo from '@init-app/store/types';

InitializationService.initializeCommon();


window.onerror = (message, source, line, column, error) => {
  store.dispatch(ADD_ERROR, new ErrorInfo(message, source, line, column, error));
};


store.dispatch(`profileModule/${FETCH_PROFILE}`).then(() =>{

  console.log("init-app loading");

  new Vue({
    i18n,
    store,
    render: h => h(App)
  }).$mount("#initApp");

  console.log("init-app loaded");

});
