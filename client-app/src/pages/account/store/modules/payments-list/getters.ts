import { GetterTree } from "vuex";
import { PaymentIn } from "@common/api/api-clients";
import { RootState } from "../../types";
import { PaymentsListState, PaymentsList } from "./types";

// getters
export const getters: GetterTree<PaymentsListState, RootState> = {
  isLoading: (state: PaymentsListState): boolean => {
    return state.isLoading;
  },
  paymentsList: (state: PaymentsListState): PaymentsList => {
    return state.paymentsList;
  },
  selectedPayment: (state: PaymentsListState): PaymentIn | null => {
    return state.selectedPayment;
  },
  activeKeyword: (state: PaymentsListState): string | undefined => {
    return state.paymentsList.listConfig.filters.keyword;
  }
};
