import { CustomerOrder } from '@common/api/api-clients';

export interface OrdersListConfig {
  columns: string[];
  pageNumber: number;
  pageSize?: number;
  filters: OrdersListFilters;
}

export interface OrdersListFilters {
  sort?: string;
  keyword?: string;
  statuses: string[];
}

export interface OrdersList {
  listConfig: OrdersListConfig;
  orders: CustomerOrder[];
  totalCount: number;
}


// state type
export interface OrdersListState {
  // todo: replace with real errors model
  errors: any;
  ordersList: OrdersList;
  isLoading: boolean;
  loaded: boolean;
}
