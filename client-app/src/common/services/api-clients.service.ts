import { ApiAccountClient, ApiCartClient, ApiCatalogClient, ApiOrderClient, ApiPricingClient } from '@common/api/api-clients';
import { baseUrl } from '@common/constants';
import Vue from 'vue';

// There is globals instances of api clients fore shared usage.
// Add here new global instance any api client class if you need.
export const accountClient = new ApiAccountClient(baseUrl, Vue.axios);
export const catalogClient = new ApiCatalogClient(baseUrl, Vue.axios);
export const cartClient = new ApiCartClient(baseUrl, Vue.axios);
export const orderClient = new ApiOrderClient(baseUrl, Vue.axios);
export const pricingClient = new ApiPricingClient(baseUrl, Vue.axios);
