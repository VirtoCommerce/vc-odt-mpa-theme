import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";


const ApiService = {
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

Vue.use(VueAxios, axios);

//BASE_URL is glbal variable initialized on the layout page
Vue.axios.defaults.baseURL = window.BASE_URL;

export default ApiService;


export const LocalizationService = {
  get() {
    return ApiService.get("themes", "localization.json");
  }
};

export const AccountService = {
  getUserAccount() {
    return ApiService.get("storefrontapi", "account");
  }
};

