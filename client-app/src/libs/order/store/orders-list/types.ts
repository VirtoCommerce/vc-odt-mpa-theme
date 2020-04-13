import { BvTableFieldArray } from "bootstrap-vue";
import { AsyncState } from 'core/models/asyncState';
import { IOrderSearchCriteria, ICustomerOrderSearchResult, ICustomerOrder } from "core/api/api-clients";

// state type
export interface OrdersListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: IOrderSearchCriteria;
  orders: ICustomerOrderSearchResult;
  selectedOrder: ICustomerOrder | null;
}
