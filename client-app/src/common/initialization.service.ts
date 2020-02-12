import Vue from 'vue';
import VueAxios from "vue-axios";
import axios from "axios";
import "styles/default.scss";
import "bootstrap";

export default class InitializationService {
  static initializeCommon() {
    Vue.config.productionTip = false;

    Vue.use(VueAxios, axios);
    // BASE_URL is global variable initialized on the layout page
    Vue.axios.defaults.baseURL = window.BASE_URL.replace(new RegExp("[/]+$"), "");

    Vue.config.errorHandler = (err) => {
      throw err;
    };

    Vue.config.warnHandler = (msg, vue, trace) => {
      // todo
    };

  }
}
