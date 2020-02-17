import { ActionTree } from "vuex";
import { FETCH_ORDERS, SET_ORDERS, SET_ORDERS_LIST_CONFIG } from "./definitions";
import { OrdersListState, OrdersListConfig } from "./types";
import { RootState } from "../../types";
import {  OrderSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { orderClient} from '@common/services/api-clients.service';


//actions
export const actions: ActionTree<OrdersListState, RootState> = {
  async [FETCH_ORDERS](context) {
    context.commit(FETCH_ORDERS);
    const searchCriteria = new OrderSearchCriteria();
    searchCriteria.pageNumber =context.state.ordersList.listConfig.pageNumber;
    searchCriteria.pageSize = context.state.ordersList.listConfig.pageSize;

    const result = await orderClient.searchCustomerOrders(searchCriteria, storeName, locale);
    context.commit(SET_ORDERS, result);
  },
  async [SET_ORDERS_LIST_CONFIG](context , payload: OrdersListConfig) {
    context.commit(SET_ORDERS_LIST_CONFIG, payload);
    context.dispatch(FETCH_ORDERS);
  }
};
