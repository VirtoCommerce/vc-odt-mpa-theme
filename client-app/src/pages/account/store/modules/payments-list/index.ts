import { Module } from "vuex";
import { defaultPageSize, paymentsGridFields, paymentsStatuses, startPageNumber } from '@common/constants';
import { localizeGridColumns } from '@common/services/localization.helper.service';
import { RootState } from "../../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { PaymentsListState } from "./types";


// initial state
export const initialState: PaymentsListState = {
  errors: {},
  paymentsList: {
    listConfig: {
      columns: paymentsGridFields,
      pageNumber: startPageNumber,
      pageSize: defaultPageSize,
      filters: {
        statuses: paymentsStatuses,
        endDate: undefined,
        startDate: undefined,
        keyword: undefined
      }
    },
    totalCount: 0,
    payments: []
  },
  selectedPayment: null,
  isLoading: false,
  loaded: false
};

const localizationPaymentsGridColumnsNode = "account.payments.grid.columns"

// We need this because bootstrap-vue will directly use labels on stacked table
initialState.paymentsList.listConfig.columns = localizeGridColumns(localizationPaymentsGridColumnsNode, initialState.paymentsList.listConfig.columns);

const paymentsListModule: Module<PaymentsListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default paymentsListModule;
