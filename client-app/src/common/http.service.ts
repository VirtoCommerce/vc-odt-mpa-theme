import Vue from "vue";
import axios, { AxiosRequestConfig } from "axios";
import VueAxios from "vue-axios";

class HttpService {
  static async query(resource: string, params?: AxiosRequestConfig) {
    try {
      return await Vue.axios.get(resource, params);
    } catch (error) {
      throw new Error(`[RWV] HttpService ${error}`);
    }
  }

  static async get(resource: string, slug = "") {
    try {
      return await Vue.axios.get(`${resource}/${slug}`);
    } catch (error) {
      throw new Error(`[RWV] HttpService ${error}`);
    }
  }

  static async post(resource: string, params?: AxiosRequestConfig) {
    return await Vue.axios.post(`${resource}`, params);
  }

  static async update(resource: string, slug: string, params?: AxiosRequestConfig) {
    return await Vue.axios.put(`${resource}/${slug}`, params);
  }

  static async put(resource: string, params?: AxiosRequestConfig) {
    return await Vue.axios.put(`${resource}`, params);
  }

  static async delete(resource: string) {
    try {
      return await Vue.axios.delete(resource);
    } catch (error) {
      throw new Error(`[RWV] HttpService ${error}`);
    }
  }
}

Vue.use(VueAxios, axios);

//BASE_URL is glbal variable initialized on the layout page
Vue.axios.defaults.baseURL = window.BASE_URL.replace(new RegExp("[/]+$"), "");

export default HttpService;
