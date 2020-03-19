import { BvTableFieldArray } from "bootstrap-vue";
import { PaymentIn } from "@common/api/api-clients";


export interface PaymentsListConfig {
  columns: BvTableFieldArray;
  pageNumber: number;
  pageSize: number;
  filters: PaymentsListFilters;
}

export interface PaymentsListFilters {
  sort?: string;
  keyword?: string;
  statuses: string[];
  startDate?: Date;
  endDate?: Date;
}

export interface PaymentsList {
  listConfig: PaymentsListConfig;
  payments: PaymentIn[];
  totalCount: number;
}

// state type
export interface PaymentsListState {
  // todo: replace with real errors model
  errors: any;
  paymentsList: PaymentsList;
  isLoading: boolean;
  loaded: boolean;
  selectedPayment: PaymentIn | null;
}
