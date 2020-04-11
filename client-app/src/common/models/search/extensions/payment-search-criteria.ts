import { PaymentSearchCriteria } from '@common/api/api-clients';
import { PaymentSearchQuery } from '@common/models/search/extensions/payment-search-query';
import { OrderOperationSearchCriteria } from '@common/models/search/order-operation-search-criteria';

declare module '@common/api/api-clients' {
  interface PaymentSearchCriteria extends OrderOperationSearchCriteria {
    toSearchQuery<TSearchQuery extends PaymentSearchQuery>(searchQueryType: new() => TSearchQuery): TSearchQuery;
    normalize(): void;
  }
}

PaymentSearchCriteria.prototype.toSearchQuery = function<TSearchQuery extends PaymentSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
  const searchQuery = OrderOperationSearchCriteria.prototype.toSearchQuery.apply<PaymentSearchCriteria, { new(): TSearchQuery }[], TSearchQuery>(this, [searchQueryType]);
  return searchQuery;
}

PaymentSearchCriteria.prototype.normalize = function() {
  OrderOperationSearchCriteria.prototype.normalize.apply(this);
}
