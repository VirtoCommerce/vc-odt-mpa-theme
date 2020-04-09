import { OrderSearchCriteria } from '@common/api/api-clients';
import { OrderSearchQuery } from '@common/models/search/extensions/order-search-query';
import { OrderOperationSearchCriteria } from '@common/models/search/order-operation-search-criteria';

declare module '@common/api/api-clients' {
  interface OrderSearchCriteria extends OrderOperationSearchCriteria {
    toSearchQuery<TSearchQuery extends OrderSearchQuery>(searchQueryType: new() => TSearchQuery): TSearchQuery;
    normalize(): void;
  }
}

OrderSearchCriteria.prototype.toSearchQuery = function<TSearchQuery extends OrderSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
  const searchQuery = OrderOperationSearchCriteria.prototype.toSearchQuery.apply<OrderSearchCriteria, { new(): TSearchQuery }[], TSearchQuery>(this, [searchQueryType]);
  return searchQuery;
}

OrderSearchCriteria.prototype.normalize = function() {
  OrderOperationSearchCriteria.prototype.normalize.apply(this);
}
