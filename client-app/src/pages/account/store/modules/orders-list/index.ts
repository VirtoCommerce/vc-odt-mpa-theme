import { Module } from "vuex";
import { BvTableFieldArray } from 'bootstrap-vue';
import { defaultPageSize, ordersStatuses, ordersGridFields } from '@common/constants';
import { localizeOrdersGridColumns } from '@common/services/localization.helper.service';
import { RootState } from "../../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { OrdersListState } from "./types";


// initial state
export const initialState: OrdersListState = {
  errors: {},
  ordersList: {
    listConfig: {
      columns: ordersGridFields,
      pageNumber: 1,
      pageSize: defaultPageSize,
      filters: {
        statuses: ordersStatuses,
        endDate: undefined,
        startDate: undefined,
        keyword: undefined
      }
    },
    totalCount: 0,
    orders: []
  },
  selectedOrder: null,
  selectedOrderIsLoaded: false,
  isLoading: false,
  loaded: false
};

const localizationOrdersGridColumnsNode = "account.orders.grid.columns"

// We need this because bootstrap-vue will directly use labels on stacked table
initialState.ordersList.listConfig.columns = localizeOrdersGridColumns(localizationOrdersGridColumnsNode, initialState.ordersList.listConfig.columns);

const ordersListModule: Module<OrdersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default ordersListModule;
