import { baseUrl, locale, storeName, defaultPageSize } from "@common/constants";

export default class UrlService{
  static get fullBaseUrl(){
    return `${baseUrl}/${storeName}/${locale}/`
  }

  static get loginUrl() {
    return `${this.fullBaseUrl}account/login`;
  }

  static get accessDeniedUrl() {
    return `${this.fullBaseUrl}error/AccessDenied`;
  }
}
