import { GetterTree } from "vuex";
import { BvTableFieldArray } from 'bootstrap-vue';
import { PaymentsListState } from "@account/store/modules/payments-list/types";
import { RootState } from '@account/store/types';
import { IPaymentSearchCriteria, IPaymentSearchResult } from '@common/api/api-clients';

// getters
export const getters: GetterTree<PaymentsListState, RootState> = {
  isLoading: (state: PaymentsListState): boolean => {
    return state.isLoading;
  },
  columns: (state: PaymentsListState): BvTableFieldArray => {
    return state.columns;
  },
  searchCriteria: (state: PaymentsListState): IPaymentSearchCriteria => {
    return state.searchCriteria;
  },
  payments: (state: PaymentsListState): IPaymentSearchResult => {
    return state.payments;
  }
};
