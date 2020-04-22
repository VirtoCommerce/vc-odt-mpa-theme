import {  BvTableFieldArray } from 'bootstrap-vue';

// It is global variables initialized on the layout page
export const storeName = window.STORE_NAME;
export const locale = window.LOCALE;
// Need to trim store and language from base URL because they will be added later as parameters for each API call.
export const baseUrl = window.BASE_URL.replace(`/${storeName}`, "/")
  .replace(`/${locale}`, "/")
  .replace(/[/]+$/, "");

export const fullBaseUrl = `${baseUrl}/${storeName}/${locale}/`;
export const loginUrl = `${fullBaseUrl}account/login`;
export const accessDeniedUrl = `${fullBaseUrl}error/AccessDenied`;

// General variables
export const isoDateFormat = "YYYY-MM-DD";

// Search
export const pageSizes = [10, 20, 50, 100]
export const defaultPageSize = 10;
export const startPageNumber = 1;
export const ordersStatuses = ["New","Cancelled","Processing","Completed","Pending"];
export const invoicesStatuses = ["New", "Paid"];
export const paymentsStatuses = ["Paid"];
export const orderDraftType = "orderDraft";
export const sortAscending = "asc";
export const sortDescending = "desc";
export const catalogOrderDraftsCount = 100;

// Grids
export const ordersGridFields =  window.THEME_SETTINGS.orders_grid_fields as BvTableFieldArray;
export const usersGridFields =  window.THEME_SETTINGS.users_grid_fields as BvTableFieldArray;
export const invoicesGridFields = window.THEME_SETTINGS.invoices_grid_fields as BvTableFieldArray;
export const paymentsGridFields = window.THEME_SETTINGS.payments_grid_fields as BvTableFieldArray;
export const draftsGridFields = window.THEME_SETTINGS.drafts_grid_fields as BvTableFieldArray;

// features
export const ordersBrowsingFeature = window.OrdersBrowsingFeature;
export const paymentBrowsingFeature = window.PaymentBrowsingFeature;
export const invoiceBrowsingFeature = window.InvoiceBrowsingFeature;
export const manageUsersFeature = window.ManageUsersFeature;
export const manageRolesFeature = window.ManageRolesFeature;
export const contractsInfoBrowsingFeature = window.ContractsInfoBrowsingFeature;
export const retrieveReorderingFeature = window.RetrieveReorderingFeature;
export const orderApprovalFeature = window.OrderApprovalFeature;
export const productTextSearchFeature = window.ProductTextSearchFeature;
export const productsFilteringFeature = window.ProductsFilteringFeature;
export const productDetailsBrowsingFeature = window.ProductDetailsBrowsingFeature;
export const productPriceBrowsingFeature = window.ProductPriceBrowsingFeature;
export const productRecommendationFeature = window.ProductRecommendationFeature;
export const orderDraftFeature = window.OrderDraftFeature;
export const wishListFeature = window.WishListFeature;
export const submitOrderFeature = window.SubmitOrderFeature;
export const productInventoryBrowsingFeature = window.ProductInventoryBrowsingFeature;
export const manageShipmentDetailsFeature = window.ManageShipmentDetailsFeature;
export const managePaymentDetailsFeature = window.ManagePaymentDetailsFeature;

