import { Module } from "vuex";
import { RootState } from 'store/types';
import { defaultPageSize, ordersGridFields, startPageNumber } from '@common/constants';
import { localizeGridColumns } from '@common/services/localization.helper.service';
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
      pageNumber: startPageNumber,
      pageSize: defaultPageSize,
      filters: {
        statuses: [],
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
initialState.ordersList.listConfig.columns = localizeGridColumns(localizationOrdersGridColumnsNode, initialState.ordersList.listConfig.columns);

const ordersListModule: Module<OrdersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default ordersListModule;
