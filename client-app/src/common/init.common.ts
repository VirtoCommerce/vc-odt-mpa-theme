import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { storeInfo } from "@common/constants";

/**
 * Init common plugins and data for all pages
 */
export default function initCommon(){

  Vue.config.productionTip = false;

  Vue.use(VueAxios, axios);

  Vue.axios.defaults.baseURL = storeInfo.baseUrl;
}


