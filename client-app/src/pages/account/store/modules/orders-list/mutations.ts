import { FETCH_ORDERS, SET_ORDERS, SET_ORDERS_LIST_CONFIG } from "./definitions";
import { MutationTree } from "vuex";
import { OrdersListState, OrdersListConfig } from "./types";
import { CustomerOrderSearchResult } from '@common/api/api-clients';

//mutations
export const mutations: MutationTree<OrdersListState> = {
  [FETCH_ORDERS](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [SET_ORDERS](state, payload: CustomerOrderSearchResult) {
    state.ordersList.orders = payload.results  || [];
    state.ordersList.totalCount = payload.totalCount || 0;
    state.loaded = true;
    state.isLoading = false;
  },
  [SET_ORDERS_LIST_CONFIG](state, payload: OrdersListConfig) {
    state.ordersList.listConfig = payload;
  }
};
