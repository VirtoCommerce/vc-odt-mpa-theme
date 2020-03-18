import {  BvTableFieldArray } from 'bootstrap-vue';

//It is global variables initialized on the layout page
export const storeName = window.STORE_NAME;
export const locale = window.LOCALE;
//Need to trim store and language from base URL because they will be added later as parameters for each API call.
export const baseUrl = window.BASE_URL.replace(`/${storeName}`, "/")
  .replace(`/${locale}`, "/")
  .replace(/[/]+$/, "");

// Other constants can be placed here
export const pageSizes = [10, 20, 50, 100]
export const defaultPageSize = 10;
export const ordersStatuses = ["New","Cancelled","Processing","Completed","Pending"];
export const invoicesStatuses = ["New", "Paid"];

export const ordersGridFields =  window.THEME_SETTINGS.orders_grid_fields as BvTableFieldArray;
export const usersGridFields =  window.THEME_SETTINGS.users_grid_fields as BvTableFieldArray;
export const invoicesGridFields = window.THEME_SETTINGS.invoices_grid_fields as BvTableFieldArray;
