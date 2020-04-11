import { BvTableFieldArray } from "bootstrap-vue";
import { IPaymentSearchCriteria, IPaymentSearchResult, IPaymentIn } from "@common/api/api-clients";
import { AsyncState } from '@account/store/types';

// state type
export interface PaymentsListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: IPaymentSearchCriteria;
  payments: IPaymentSearchResult;
}