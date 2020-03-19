import { BvTableFieldArray } from "bootstrap-vue";
import { PaymentIn } from "@common/api/api-clients";


export interface InvoicesListConfig {
  columns: BvTableFieldArray;
  pageNumber: number;
  pageSize: number;
  filters: InvoicesListFilters;
}

export interface InvoicesListFilters {
  sort?: string;
  keyword?: string;
  statuses: string[];
  startDate?: Date;
  endDate?: Date;
}

export interface InvoicesList {
  listConfig: InvoicesListConfig;
  invoices: PaymentIn[];
  totalCount: number;
}

// state type
export interface InvoicesListState {
  // todo: replace with real errors model
  errors: any;
  invoicesList: InvoicesList;
  isLoading: boolean;
  loaded: boolean;
  selectedInvoice: PaymentIn | null;
}
