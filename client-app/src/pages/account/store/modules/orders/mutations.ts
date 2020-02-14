import { MutationTree } from "vuex";
import { OrdersState } from './state';
import { CustomerOrderSearchResult } from '@common/api/api-clients';
import { Pagination } from '@common/models/pagination';
import {ORDERS_LOADED, ORDERS_REQUEST, SET_PAGINATION} from "./mutation-types";


//mutations
export const mutations: MutationTree<OrdersState> = {

  [ORDERS_LOADED](state, ordersSearchResult: CustomerOrderSearchResult) {
    state.ordersPage = ordersSearchResult.results || [];
    state.pagination.totalCount = ordersSearchResult.totalCount || 0;
    state.isLoading = false;
  },
  [ORDERS_REQUEST](state) {
    state.isLoading = true;
  },
  [SET_PAGINATION](state, payload: Pagination) {
    state.pagination = payload;
  }

};
