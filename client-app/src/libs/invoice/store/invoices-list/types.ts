import { BvTableFieldArray } from "bootstrap-vue";
import { IPaymentSearchCriteria, IPaymentSearchResult, IPaymentIn } from "@common/api/api-clients";
import { AsyncState } from '@account/store/types';

// state type
export interface InvoicesListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: IPaymentSearchCriteria;
  invoices: IPaymentSearchResult;
}