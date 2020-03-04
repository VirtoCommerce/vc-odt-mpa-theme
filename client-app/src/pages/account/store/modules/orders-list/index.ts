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
      columns : [
        { key: "number", sortable: true },
        { key: "status",  sortable: true },
        { key: "createdDate",  sortable: true },
        { key: "items.length",  sortable: false },
        { key: "createdBy",  sortable: true },
        { key: "total.formattedAmount",  sortable: true }
      ],
      pageNumber: 1,
      pageSize: defaultPageSize,
      filters : {
        statuses: [],
        endDate: undefined,
        startDate: undefined
      }
    },
    totalCount : 0,
    orders: []
  },
  selectedOrder: null,
  selectedOrderIsLoaded: false,
  isLoading: false,
  loaded: false
};
// We need this because bootstrap-vue will directly use labels on stacked table
initialState.ordersList.listConfig.columns = initialState.ordersList.listConfig.columns.map(column => ({
  ...column,
  label: i18n.t(`account.orders.grid.columns.${column.key.split(".").join("_")}`) as string
}));


const ordersListModule: Module<OrdersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}

export default ordersListModule;
