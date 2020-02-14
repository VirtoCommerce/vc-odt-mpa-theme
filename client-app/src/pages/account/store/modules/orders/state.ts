import { CustomerOrder } from '@common/api/api-clients';
import { Pagination } from '@common/models/pagination';

const initialColumns = [
  {key: "number", label:"Order ID"},
  {key: "status", label:"Status"},
  {key: "createdDate", label:"Date"},
  {key: "items.length", label:"# Items"},
  {key: "createdBy", label:"Created by"},
  {key: "total.formattedAmount", label:"Total"},
];

export class OrdersState{
  constructor( public ordersPage: CustomerOrder[] = [],
      public pagination: Pagination = new Pagination(),
      public isLoading = false,
      public gridColumns = initialColumns
  ) {}
}
// Initial state
export const state = new OrdersState();

