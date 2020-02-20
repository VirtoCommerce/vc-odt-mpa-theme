import { Module, } from "vuex";
import { defaultPageSize } from '@common/constants';
import { RootState } from "../../types";
import {actions} from "./actions";
import {getters} from "./getters";
import {mutations} from "./mutations";
import { OrdersListState } from "./types";


// initial state
export const initialState: OrdersListState = {
  errors: {},
  ordersList: {
    listConfig: {
      columns : [
        { key: "number", sortable: true },
        { key: "status",  sortable: true },
        { key: "createdDate",  sortable: true },
        { key: "items.length",  sortable: false },
        { key: "createdBy",  sortable: true },
        { key: "order.total.formattedAmount",  sortable: true }
      ],
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
