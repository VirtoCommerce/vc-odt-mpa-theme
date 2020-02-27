import { MutationTree } from "vuex";
import { CustomerOrderSearchResult, CustomerOrder } from '@common/api/api-clients';
import { FETCH_ORDERS, SET_ORDERS, SET_ORDERS_LIST_CONFIG, SET_ORDER, FETCH_ORDER } from "./definitions";
import { OrdersListState, OrdersListConfig } from "./types";

//mutations
export const mutations: MutationTree<OrdersListState> = {
  [FETCH_ORDERS](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [FETCH_ORDER](state) {
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
  },
  [SET_ORDER](state, payload: CustomerOrder) {
    state.selectedOrder = payload;
    state.loaded = true;
    state.isLoading = false;
  }
};
