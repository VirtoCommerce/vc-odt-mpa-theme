import { Module, } from "vuex";
import i18n from "@i18n";
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
      columns : [ "number", "status", "createdDate", "items.length", "createdBy", "order.total.formattedAmount"],
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
// We need this because bootstrap-vue will directly use labels on stacked table
initialState.ordersList.listConfig.columns = (initialState.ordersList.listConfig.columns as string[]).map(column => ({
  key: column,
  label: i18n.t(`account.orders.grid.columns.${column.split('.').join('_')}`) as string
}));


const ordersListModule: Module<OrdersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}

export default ordersListModule;
