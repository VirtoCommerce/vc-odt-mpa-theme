import { MutationTree } from "vuex";
import { PaymentSearchResult } from '@common/api/api-clients';
import { FETCH_INVOICES, SET_INVOICES_LIST_CONFIG } from "./definitions";
import { InvoicesListState, InvoicesListConfig } from "./types";

export const SET_INVOICES = "setInvoices";

//mutations
export const mutations: MutationTree<InvoicesListState> = {
  [FETCH_INVOICES](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [SET_INVOICES](state, payload: PaymentSearchResult) {
    state.invoicesList.invoices = payload.results  || [];
    state.invoicesList.totalCount = payload.totalCount || 0;
    state.loaded = true;
    state.isLoading = false;
  },
  [SET_INVOICES_LIST_CONFIG](state, payload: InvoicesListConfig) {
    state.invoicesList.listConfig = payload;
  }
};
