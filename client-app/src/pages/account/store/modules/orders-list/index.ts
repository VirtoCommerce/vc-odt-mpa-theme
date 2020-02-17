import { Module, } from "vuex";
import { OrdersListState } from "./types";
import {getters} from "./getters";
import {actions} from "./actions";
import {mutations} from "./mutations";
import { RootState } from "../../types";
import { defaultPageSize } from '@common/constants';


// initial state
export const initialState: OrdersListState = {
  errors: {},
  ordersList: {
    listConfig: {
      columns : [ "number", "status", "createdDate", "items.length", "createdBy"],
      pageNumber: 1,
      pageSize: defaultPageSize,
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
