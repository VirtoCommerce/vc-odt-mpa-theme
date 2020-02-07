import _Vue from "vue";

/**
 * Extend Vue with $storeInfo global property with such interface { baseUrl, storeName, currentLng }
 */
export function StoreInfoPlugin(Vue: typeof _Vue, options?: any){
  const baseUrl = window.BASE_URL.replace(new RegExp("[/]+$"), "");
  const storeName = (window as any).STORE_NAME;
  const currentLng = (window as any).STORE_LNG;
  Vue.$storeInfo = { baseUrl, storeName, currentLng };
}

export interface IStoreInfo{
  baseUrl: string;
  storeName: string;
  currentLng: string;
}
