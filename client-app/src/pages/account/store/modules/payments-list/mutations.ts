import { MutationTree } from "vuex";
import { FETCH_PAYMENTS, SET_PAYMENTS_SEARCH_CRITERIA, SET_PAYMENTS } from "@account/store/modules/payments-list/definitions";
import { PaymentsListState } from "@account/store/modules/payments-list/types";
import { fetchAsync, setAsync } from '@account/store/mutations';
import { PaymentSearchResult, PaymentSearchCriteria } from '@common/api/api-clients';

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
