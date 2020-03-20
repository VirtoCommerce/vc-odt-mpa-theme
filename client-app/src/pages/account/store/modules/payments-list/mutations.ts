import { MutationTree } from "vuex";
import { PaymentSearchResult } from '@common/api/api-clients';
import { FETCH_PAYMENTS, SET_PAYMENTS_LIST_CONFIG } from "./definitions";
import { PaymentsListState, PaymentsListConfig } from "./types";

export const SET_PAYMENTS = "setPayments";

//mutations
export const mutations: MutationTree<PaymentsListState> = {
  [FETCH_PAYMENTS](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [SET_PAYMENTS](state, payload: PaymentSearchResult) {
    state.paymentsList.payments = payload.results  || [];
    state.paymentsList.totalCount = payload.totalCount || 0;
    state.loaded = true;
    state.isLoading = false;
  },
  [SET_PAYMENTS_LIST_CONFIG](state, payload: PaymentsListConfig) {
    state.paymentsList.listConfig = payload;
  }
};
