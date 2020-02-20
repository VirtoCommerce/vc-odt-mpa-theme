import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { OrdersListState, OrdersList } from "./types";

// getters
export const getters: GetterTree<OrdersListState, RootState> = {
  isLoading: (state: OrdersListState): boolean => {
    return state.isLoading;
  },
  ordersList: (state: OrdersListState): OrdersList => {
    return state.ordersList;
  }
};
