import {  BvTableFieldArray } from 'bootstrap-vue';

//It is global variables initialized on the layout page
export const storeName = window.STORE_NAME;
export const locale = window.LOCALE;
//Need to trim store and language from base URL because they will be added later as parameters for each API call.
export const baseUrl = window.BASE_URL.replace(`/${storeName}`, "/")
  .replace(`/${locale}`, "/")
  .replace(/[/]+$/, "");

// Other constants can be placed here
export const pageSizes = [10, 20, 30, 40, 50]
export const defaultPageSize = 10;

export const ordersGridFields =  window.THEME_SETTINGS.orders_grid_fields as BvTableFieldArray;
