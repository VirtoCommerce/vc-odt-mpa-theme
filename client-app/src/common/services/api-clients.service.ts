import { ApiAccountClient, ApiCartClient, ApiCatalogClient, ApiOrderClient, ApiPricingClient } from '@common/api/api-clients';
import { storeInfo } from '@common/constants';
import Vue from 'vue';

// There is globals instances of api clients fore shared usage.
// Add here new global instance any api client class if you need.
export const accountClient = new ApiAccountClient(storeInfo.baseUrl, Vue.axios);
export const catalogClient = new ApiCatalogClient(storeInfo.baseUrl, Vue.axios);
export const cartClient = new ApiCartClient(storeInfo.baseUrl, Vue.axios);
export const orderClient = new ApiOrderClient(storeInfo.baseUrl, Vue.axios);
export const pricingClient = new ApiPricingClient(storeInfo.baseUrl, Vue.axios);
