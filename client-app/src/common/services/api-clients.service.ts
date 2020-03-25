import Vue from 'vue';
import axios  from 'axios';
import { ApiAccountClient, ApiCartClient, ApiCatalogClient, ApiOrderClient, ApiPricingClient } from '@common/api/api-clients';
import { baseUrl } from '@common/constants';

// There is globals instances of api clients fore shared usage.
// Add here new global instance any api client class if you need.
export const accountClient = new ApiAccountClient(baseUrl, axios);
export const catalogClient = new ApiCatalogClient(baseUrl, axios);
export const cartClient = new ApiCartClient(baseUrl, axios);
export const orderClient = new ApiOrderClient(baseUrl, axios);
export const pricingClient = new ApiPricingClient(baseUrl, axios);
