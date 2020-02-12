//It is global variables initialized on the layout page
export const baseUrl = window.BASE_URL.replace(new RegExp("[/]+$"), "");
export const storeName = (window as any).STORE_NAME;
export const locale = (window as any).STORE_LNG;

// Other constants can be placed here
