import Vue from 'vue';
import VueAxios from "vue-axios";
import * as VueMoment from "vue-moment";
import VueRx from "vue-rx";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import { ButtonPlugin, CollapsePlugin, ToastPlugin } from 'bootstrap-vue'
import { baseUrl } from "@common/constants";

export default class InitializationService {
  static initializeCommon() {
    Vue.config.productionTip = false;

    Vue.use(VueRx);

    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = baseUrl;

    Vue.use(VueMoment);

    Vue.use(ButtonPlugin);
    Vue.use(CollapsePlugin);
    Vue.use(ToastPlugin);

    Vue.component('font-awesome-icon', FontAwesomeIcon);
  }
}
