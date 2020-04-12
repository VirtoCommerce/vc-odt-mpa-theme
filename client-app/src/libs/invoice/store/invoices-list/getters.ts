import { GetterTree } from "vuex";
import { BvTableFieldArray } from 'bootstrap-vue';
import { InvoicesListState } from "libs/invoice/store/invoices-list/types";
import { RootState } from "store/types";
import { IPaymentSearchCriteria, IPaymentSearchResult } from "@common/api/api-clients";

// getters
export const getters: GetterTree<InvoicesListState, RootState> = {
  isLoading: (state: InvoicesListState): boolean => {
    return state.isLoading;
  },
  columns: (state: InvoicesListState): BvTableFieldArray => {
    return state.columns;
  },
  searchCriteria: (state: InvoicesListState): IPaymentSearchCriteria => {
    return state.searchCriteria;
  },
  invoices: (state: InvoicesListState): IPaymentSearchResult => {
    return state.invoices;
  }
};
