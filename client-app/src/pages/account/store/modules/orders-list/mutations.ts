import { MutationTree } from "vuex";
import { fetchAsync, setAsync } from "@account/store/mutations";
import { CustomerOrderSearchResult, CustomerOrder, OrderSearchCriteria } from "@common/api/api-clients";
import { FETCH_ORDERS, SET_ORDERS_SEARCH_CRITERIA, FETCH_SELECTED_ORDER, CLEAR_SELECTED_ORDER, SET_ORDERS, SET_SELECTED_ORDER } from "./definitions";
import { OrdersListState } from "./types";

//mutations
export const mutations: MutationTree<OrdersListState> = {
  [SET_ORDERS_SEARCH_CRITERIA](state, payload: OrderSearchCriteria) {
    state.searchCriteria = payload;
  },
  [FETCH_ORDERS](state) {
    fetchAsync(state);
  },
  [SET_ORDERS](state, payload: CustomerOrderSearchResult) {
    state.orders.results = payload.results  || [];
    state.orders.totalCount = payload.totalCount || 0;
    setAsync(state);
  },
  [FETCH_SELECTED_ORDER](state) {
    fetchAsync(state);
  },
  [SET_SELECTED_ORDER](state, payload: CustomerOrder) {
    state.selectedOrder = payload;
    setAsync(state);
  },
  [CLEAR_SELECTED_ORDER](state) {
    state.selectedOrder = null;
  }
};
