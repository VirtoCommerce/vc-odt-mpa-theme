//It is global variables initialized on the layout page
export const storeName = window.STORE_NAME;
export const locale = window.LOCALE;
//Need to trim store and language from base URL because they will be added later as parameters for each API call.
export const baseUrl = window.BASE_URL.replace(`/${storeName}`, "/")
  .replace(`/${locale}`, "/")
  .replace(/[/]+$/, "");

// Other constants can be placed here
