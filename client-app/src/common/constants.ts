//It is global variables initialized on the layout page
export const storeName = (window as any).STORE_NAME;
export const locale = (window as any).STORE_LANG;
//Need to trim store and language from base URL because they will be added later as parameters for each API call. 
export const baseUrl = window.BASE_URL.replace(`/${storeName}/`, "/")
  .replace(`/${locale}/`, "/")
  .replace(new RegExp("[/]+$"), "");

// Other constants can be placed here
