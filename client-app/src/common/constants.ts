//It is global variables initialized on the layout page
export const storeName = window.STORE_NAME;
export const locale = window.LOCALE;
export const baseUrl = window.BASE_URL
  .replace(/\/$/, "")
  .replace(new RegExp(`/${storeName}$`), "")
  .replace(new RegExp(`/${locale}$`), "");

// Other constants can be placed here
