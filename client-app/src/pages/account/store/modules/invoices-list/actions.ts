import { ActionTree } from "vuex";
import { FETCH_INVOICES, SET_INVOICES_SEARCH_CRITERIA, SET_INVOICES } from "@account/store/modules/invoices-list/definitions";
import { InvoicesListState } from "@account/store/modules/invoices-list/types";
import { RootState } from '@account/store/types';
import { PaymentSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { orderClient } from '@common/services/api-clients.service';

//actions
export const actions: ActionTree<InvoicesListState, RootState> = {
  async [SET_INVOICES_SEARCH_CRITERIA](context , payload: PaymentSearchCriteria) {
    context.commit(SET_INVOICES_SEARCH_CRITERIA, payload);
    context.dispatch(FETCH_INVOICES);
  },
  async [FETCH_INVOICES](context) {
    context.commit(FETCH_INVOICES);
    const result = await orderClient.searchPayments(new PaymentSearchCriteria(context.state.searchCriteria), storeName, locale);
    context.commit(SET_INVOICES, result);
  }
};
