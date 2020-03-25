import { baseUrl, locale, storeName, defaultPageSize } from "@common/constants";

export default class UrlService{
  static get fullBaseUrl(){
    return `${baseUrl}/${storeName}/${locale}/`
  }
}
