import { Module } from "vuex";
import { defaultPageSize, invoicesGridFields, invoicesStatuses } from '@common/constants';
import { localizeGridColumns } from '@common/services/localization.helper.service';
import { RootState } from "../../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { InvoicesListState } from "./types";


// initial state
export const initialState: InvoicesListState = {
  errors: {},
  invoicesList: {
    listConfig: {
      columns: invoicesGridFields,
      pageNumber: 1,
      pageSize: defaultPageSize,
      filters: {
        statuses: invoicesStatuses,
        endDate: undefined,
        startDate: undefined,
        keyword: undefined
      }
    },
    totalCount: 0,
    invoices: []
  },
  selectedInvoice: null,
  isLoading: false,
  loaded: false
};

const localizationInvoicesGridColumnsNode = "account.invoices.grid.columns"

// We need this because bootstrap-vue will directly use labels on stacked table
initialState.invoicesList.listConfig.columns = localizeGridColumns(localizationInvoicesGridColumnsNode, initialState.invoicesList.listConfig.columns);

const invoicesListModule: Module<InvoicesListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default invoicesListModule;
