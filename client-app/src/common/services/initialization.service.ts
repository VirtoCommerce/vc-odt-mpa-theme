import Vue, { PluginObject } from 'vue';
import VueAxios from "vue-axios";
import axios from "axios";
import VueI18n from "vue-i18n";
import i18n from "@i18n";
import { baseUrl } from "@common/constants";
import LocalizationService from "@common/services/localization.service";
import "styles/default.scss";
import "bootstrap";
import { TablePlugin, PaginationPlugin } from "bootstrap-vue";
import Loading from 'vue-loading-overlay';

export default class InitializationService {
  static initializeCommon() {
    Vue.config.productionTip = false;

    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = baseUrl;

    LocalizationService.get().then(({ data }) => {
      i18n.setLocaleMessage("en", data);
    });

    //plugins
    Vue.use(TablePlugin);
    Vue.use(PaginationPlugin);

    //global components
    Vue.component("loading", Loading);
  }
}
