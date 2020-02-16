import { Module, } from "vuex";
import { OrdersListState } from "./types";
import {getters} from "./getters";
import {actions} from "./actions";
import {mutations} from "./mutations";
import { RootState } from "../../types";


// initial state
export const initialState: OrdersListState = {
  errors: {},
  ordersList: {
    listConfig: {
      columns : [ "number", "status", "createdDate", "items.length", "createdBy"],
      pageNumber: 1,
      pageSize: 10,
      filters : {
        statuses: []
      }
    },
    totalCount : 0,
    orders: []
  },
  isLoading: false,
  loaded: false
};


const ordersListModule: Module<OrdersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}

export default ordersListModule;
