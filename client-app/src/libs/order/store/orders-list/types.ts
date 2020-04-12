import { BvTableFieldArray } from "bootstrap-vue";
import { AsyncState } from '@common/models/asyncState';
import { IOrderSearchCriteria, ICustomerOrderSearchResult, ICustomerOrder } from "@common/api/api-clients";

// state type
export interface OrdersListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: IOrderSearchCriteria;
  orders: ICustomerOrderSearchResult;
  selectedOrder: ICustomerOrder | null;
}
