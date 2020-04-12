import { MutationTree } from "vuex";
import { FETCH_PAYMENTS, SET_PAYMENTS_SEARCH_CRITERIA, SET_PAYMENTS } from "libs/payment/store/payments-list/definitions";
import { PaymentsListState } from "libs/payment/store/payments-list/types";
import { PaymentSearchResult, PaymentSearchCriteria } from '@common/api/api-clients';
import { fetchAsync, setAsync } from '@common/helpers/async-state';

//mutations
export const mutations: MutationTree<PaymentsListState> = {
  [SET_PAYMENTS_SEARCH_CRITERIA](state, payload: PaymentSearchCriteria) {
    state.searchCriteria = payload;
  },
  [FETCH_PAYMENTS](state) {
    fetchAsync(state);
  },
  [SET_PAYMENTS](state, payload: PaymentSearchResult) {
    state.payments.results = payload.results  || [];
    state.payments.totalCount = payload.totalCount || 0;
    setAsync(state);
  },
};
