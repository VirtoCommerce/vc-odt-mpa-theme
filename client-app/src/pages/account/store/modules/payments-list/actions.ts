import { ActionTree } from "vuex";
import { RootState } from "store/types";
import { PaymentSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { orderClient } from '@common/services/api-clients.service';
import { FETCH_PAYMENTS, SET_PAYMENTS_LIST_CONFIG } from "./definitions";
import { SET_PAYMENTS } from "./mutations"
import { PaymentsListState, PaymentsListConfig } from "./types";


//actions
export const actions: ActionTree<PaymentsListState, RootState> = {
  async [FETCH_PAYMENTS](context) {
    context.commit(FETCH_PAYMENTS);
    const searchCriteria = new PaymentSearchCriteria();
    searchCriteria.pageNumber = context.state.paymentsList.listConfig.pageNumber;
    searchCriteria.pageSize = context.state.paymentsList.listConfig.pageSize;
    searchCriteria.sort = context.state.paymentsList.listConfig.filters.sort;
    searchCriteria.statuses = context.state.paymentsList.listConfig.filters.statuses;
    searchCriteria.capturedStartDate = context.state.paymentsList.listConfig.filters.startDate;
    searchCriteria.capturedEndDate = context.state.paymentsList.listConfig.filters.endDate;
    searchCriteria.keyword = context.state.paymentsList.listConfig.filters.keyword;
    const result = await orderClient.searchPayments(searchCriteria, storeName, locale);
    context.commit(SET_PAYMENTS, result);
  },
  async [SET_PAYMENTS_LIST_CONFIG](context , payload: PaymentsListConfig) {
    context.commit(SET_PAYMENTS_LIST_CONFIG, payload);
    context.dispatch(FETCH_PAYMENTS);
  }
};
