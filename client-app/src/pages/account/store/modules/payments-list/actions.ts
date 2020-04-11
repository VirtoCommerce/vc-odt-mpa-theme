import { ActionTree } from "vuex";
import { RootState } from "store/types";
import { PaymentsListState } from "@account/store/modules/payments-list/types";
import { FETCH_PAYMENTS, SET_PAYMENTS_SEARCH_CRITERIA, SET_PAYMENTS } from "@account/store/modules/payments-list/definitions";
import { PaymentSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { orderClient } from '@common/services/api-clients.service';

//actions
export const actions: ActionTree<PaymentsListState, RootState> = {
  async [SET_PAYMENTS_SEARCH_CRITERIA](context , payload: PaymentSearchCriteria) {
    context.commit(SET_PAYMENTS_SEARCH_CRITERIA, payload);
    context.dispatch(FETCH_PAYMENTS);
  },
  async [FETCH_PAYMENTS](context) {
    context.commit(FETCH_PAYMENTS);
    const result = await orderClient.searchPayments(new PaymentSearchCriteria(context.state.searchCriteria), storeName, locale);
    context.commit(SET_PAYMENTS, result);
  }
};
