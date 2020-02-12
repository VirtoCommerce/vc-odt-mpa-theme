import Vue from "vue";
import { AxiosRequestConfig } from "axios";

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


export default HttpService;
