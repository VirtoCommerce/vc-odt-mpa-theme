import { CustomerOrder } from '@common/api/api-clients';
import { Pagination } from '@common/models/pagination';

export class OrdersState{
  constructor( public ordersPage: CustomerOrder[] = [],
      public pagination: Pagination = new Pagination(),
      public isLoading = false
     ) {}
}
// Initial state
export const state = new OrdersState();

