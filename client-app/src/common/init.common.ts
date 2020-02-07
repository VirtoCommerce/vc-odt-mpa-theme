import Vue from "vue";
import VueAxios from "vue-axios";
import { StoreInfoPlugin } from '@common/plugins/store.info.plugin';
import axios from "axios";

/**
 * Init common plugins and data for all pages
 */
export default function initCommon(){

  Vue.config.productionTip = false;

  Vue.use(StoreInfoPlugin);

  Vue.use(VueAxios, axios);

  //BASE_URL is glbal variable initialized on the layout page
  Vue.axios.defaults.baseURL = window.BASE_URL.replace(new RegExp("[/]+$"), "");
}


