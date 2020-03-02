import { Module } from "vuex";
import i18n from "@i18n";
import { defaultPageSize, ordersGridFields } from "@common/constants";
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
        statuses: []
      }
    },
    totalCount: 0,
    orders: []
  },
  isLoading: false,
  loaded: false
};

function localizeOrdersGridColumns () {
  const localizationOrdersGridColumnsNode = "account.orders.grid.columns"
  initialState.ordersList.listConfig.columns = initialState.ordersList.listConfig.columns.map(column => {
    if (typeof column === "string") {
      return {
        key: column,
        label: i18n.t(`${localizationOrdersGridColumnsNode}.${column.split(".").join("_")}`) as string
      };
    } else
      return {
        ...column,
        label: i18n.t(`${localizationOrdersGridColumnsNode}.${column.key.split(".").join("_")}`) as string
      };
  });
}
// We need this because bootstrap-vue will directly use labels on stacked table
localizeOrdersGridColumns();

const ordersListModule: Module<OrdersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default ordersListModule;
