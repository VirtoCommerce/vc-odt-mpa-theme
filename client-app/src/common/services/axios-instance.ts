import axios from "axios";
import { baseUrl } from '@common/constants';
import UrlService from './url.service';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = baseUrl;
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {



    if (error.response.status) {
      switch(error.response.status){
      case 401:
        window.location.assign(UrlService.loginUrl);
        break;
      case 403:
        window.location.assign(UrlService.accessDeniedUrl);
        break;
      }
    }
    return Promise.reject(error)
  });

export default axiosInstance;
