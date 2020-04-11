import { GetterTree } from "vuex";
import { RootState } from "store/types";
import { PaymentIn } from "@common/api/api-clients";
import { InvoicesListState, InvoicesList } from "./types";

// getters
export const getters: GetterTree<InvoicesListState, RootState> = {
  isLoading: (state: InvoicesListState): boolean => {
    return state.isLoading;
  },
  InvoicesList: (state: InvoicesListState): InvoicesList => {
    return state.invoicesList;
  },
  selectedInvoice: (state: InvoicesListState): PaymentIn | null => {
    return state.selectedInvoice;
  },
  activeKeyword: (state: InvoicesListState): string | undefined => {
    return state.invoicesList.listConfig.filters.keyword;
  }
};
