import { ActionTree } from "vuex";
import { OrderSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { orderClient} from '@common/services/api-clients.service';
import { RootState } from "../../types";
import { FETCH_ORDERS, FETCH_ORDER, SET_ORDERS, SET_ORDERS_LIST_CONFIG, SET_ORDER, CLEAR_SELECTED_ORDER} from "./definitions";
import { OrdersListState, OrdersListConfig } from "./types";


//actions
export const actions: ActionTree<OrdersListState, RootState> = {
  async [FETCH_ORDERS](context) {
    context.commit(FETCH_ORDERS);
    const searchCriteria = new OrderSearchCriteria();
    searchCriteria.pageNumber = context.state.ordersList.listConfig.pageNumber;
    searchCriteria.pageSize = context.state.ordersList.listConfig.pageSize;
    searchCriteria.sort = context.state.ordersList.listConfig.filters.sort;
    searchCriteria.startDate = context.state.ordersList.listConfig.filters.startDate;
    searchCriteria.endDate = context.state.ordersList.listConfig.filters.endDate;
    const result = await orderClient.searchCustomerOrders(searchCriteria, storeName, locale);
    context.commit(SET_ORDERS, result);
  },
  async [SET_ORDERS_LIST_CONFIG](context , payload: OrdersListConfig) {
    context.commit(SET_ORDERS_LIST_CONFIG, payload);
    context.dispatch(FETCH_ORDERS);
  },
  async [FETCH_ORDER](context, payload: string) {
    context.commit(FETCH_ORDER);
    const result = await orderClient.getCustomerOrder(payload, storeName, locale);
    context.commit(SET_ORDER, result);
  },
  [CLEAR_SELECTED_ORDER](context) {
    context.commit(CLEAR_SELECTED_ORDER);
  }
};
