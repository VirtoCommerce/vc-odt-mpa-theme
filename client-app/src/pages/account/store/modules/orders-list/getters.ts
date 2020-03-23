import { GetterTree } from "vuex";
import { RootState } from 'store/types';
import { CustomerOrder } from "@common/api/api-clients";
import { OrdersListState, OrdersList } from "./types";

// getters
export const getters: GetterTree<OrdersListState, RootState> = {
  isLoading: (state: OrdersListState): boolean => {
    return state.isLoading;
  },
  ordersList: (state: OrdersListState): OrdersList => {
    return state.ordersList;
  },
  selectedOrder: (state: OrdersListState): CustomerOrder | null => {
    return state.selectedOrder;
  },
  orderIsLoaded: (state: OrdersListState): boolean => {
    return state.selectedOrderIsLoaded;
  }
};
