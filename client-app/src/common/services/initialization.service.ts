import Vue from 'vue';
import VueAxios from "vue-axios";
import Loading from 'vue-loading-overlay';
import "vue-moment";
import VueRx from "vue-rx";
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeartBroken, faLock, faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import { ButtonPlugin, CollapsePlugin, PaginationPlugin, TablePlugin, ToastPlugin, ModalPlugin, CardPlugin, DropdownPlugin, FormCheckboxPlugin, FormGroupPlugin, FormDatepickerPlugin, FormInputPlugin } from 'bootstrap-vue'
import { baseUrl } from "@common/constants";

export default class InitializationService {
  static initializeCommon() {
    Vue.config.productionTip = false;

    // window.onerror will not catch error if we will simple throw it, it still be unhandled.
    // instead of that, we calling window.onerror directly
    // undefined used here because js & ts doesn't support set optional parameters by parameter name
    Vue.config.errorHandler = (err, _vm, info) => {
      if (window.onerror){
        window.onerror(info, undefined, undefined, undefined, err);
      }
    };

    Vue.use(VueRx);

    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = baseUrl;

    //plugins
    // workaround because of unstable build caused by broken .d.ts
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Vue.use(require("vue-moment"));
    Vue.use(ButtonPlugin);
    Vue.use(CollapsePlugin);
    Vue.use(PaginationPlugin);
    Vue.use(TablePlugin);
    Vue.use(ToastPlugin);
    Vue.use(ModalPlugin);
    Vue.use(CardPlugin);
    Vue.use(FormDatepickerPlugin);
    Vue.use(FormInputPlugin);
    Vue.use(DropdownPlugin);
    Vue.use(FormCheckboxPlugin);
    Vue.use(FormGroupPlugin);

    Vue.component("font-awesome-icon", FontAwesomeIcon);
    Vue.component('font-awesome-layers', FontAwesomeLayers);
    // Add here icons which you need in liquid
    library.add(faHeartBroken, faLock, faMeteor);
    dom.watch();

    //global components
    Vue.component("loading", Loading);
  }
}
