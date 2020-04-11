import { MutationTree } from "vuex";
import { InvoicesListState } from "@account/store/modules/invoices-list/types";
import { fetchAsync, setAsync } from '@account/store/mutations';
import { PaymentSearchResult, PaymentSearchCriteria } from '@common/api/api-clients';
import { FETCH_INVOICES, SET_INVOICES_SEARCH_CRITERIA, SET_INVOICES } from "./definitions";

//mutations
export const mutations: MutationTree<InvoicesListState> = {
  [SET_INVOICES_SEARCH_CRITERIA](state, payload: PaymentSearchCriteria) {
    state.searchCriteria = payload;
  },
  [FETCH_INVOICES](state) {
    fetchAsync(state);
  },
  [SET_INVOICES](state, payload: PaymentSearchResult) {
    state.invoices.results = payload.results  || [];
    state.invoices.totalCount = payload.totalCount || 0;
    setAsync(state);
  },
};
