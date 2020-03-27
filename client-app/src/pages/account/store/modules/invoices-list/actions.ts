import { ActionTree } from "vuex";
import { RootState } from '@account/store/types';
import { PaymentSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { orderClient } from '@common/services/api-clients.service';
import { FETCH_INVOICES, SET_INVOICES_LIST_CONFIG } from "./definitions";
import { SET_INVOICES } from "./mutations"
import { InvoicesListState, InvoicesListConfig } from "./types";


//actions
export const actions: ActionTree<InvoicesListState, RootState> = {
  async [FETCH_INVOICES](context) {
    context.commit(FETCH_INVOICES);
    const searchCriteria = new PaymentSearchCriteria();
    searchCriteria.pageNumber = context.state.invoicesList.listConfig.pageNumber;
    searchCriteria.pageSize = context.state.invoicesList.listConfig.pageSize;
    searchCriteria.sort = context.state.invoicesList.listConfig.filters.sort;
    searchCriteria.statuses = context.state.invoicesList.listConfig.filters.statuses;
    searchCriteria.startDate = context.state.invoicesList.listConfig.filters.startDate;
    searchCriteria.endDate = context.state.invoicesList.listConfig.filters.endDate;
    searchCriteria.keyword = context.state.invoicesList.listConfig.filters.keyword;
    const result = await orderClient.searchPayments(searchCriteria, storeName, locale);
    context.commit(SET_INVOICES, result);
  },
  async [SET_INVOICES_LIST_CONFIG](context , payload: InvoicesListConfig) {
    context.commit(SET_INVOICES_LIST_CONFIG, payload);
    context.dispatch(FETCH_INVOICES);
  }
};
