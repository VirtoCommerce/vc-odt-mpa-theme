import { ActionTree } from "vuex";
// import { FETCH_PROFILE, SET_PROFILE, UPDATE_USER } from "@account/store/definitions";
import { State } from "@account/store/state";
import { storeName, locale } from '@common/constants';
import { orderClient } from '@common/services/api-clients.service';
import { OrdersState } from './state';
import { OrderSearchCriteria } from '@common/api/api-clients';
import { GET_ORDERS } from './action-types';

//actions
export const actions: ActionTree<OrdersState, State> = {
  async [GET_ORDERS](context) {
    try {
      context.commit(ORDERS_REQUEST);
      //const user = await accountClient.getCurrentUser(storeName, locale);

      const searchCriteria = new OrderSearchCriteria();
      searchCriteria.pageNumber = context.state.pagination.pageNumber;
      searchCriteria.pageSize = context.state.pagination.pageSize;

      searchCriteria.storeIds = [storeName];
      const result = await orderClient.searchCustomerOrders(searchCriteria, storeName, locale);
      context.commit(ORDERS_LOADED, result);
    } catch (e) {
      // #todo SET_ERROR cannot work in multiple states
      // context.commit(SET_ERROR, response.data.errors)
    }
  },
  // async [UPDATE_USER](context , userUpdateInfo: UserUpdateInfo) {
  //   await accountClient.updateAccount(userUpdateInfo, storeName, locale);
  //   context.dispatch(FETCH_PROFILE);
  // }
};
