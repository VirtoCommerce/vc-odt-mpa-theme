/* eslint-disable-next-line import/default */
import moment from 'moment';
import { OrderSearchCriteria } from '@common/api/api-clients';
import { KeywordSearchCriteria } from './keyword-search-criteria';
import { OrderSearchQuery } from './order-search-query';

declare module '@common/api/api-clients' {
  interface OrderSearchCriteria {
    toSearchQuery<TSearchQuery extends OrderSearchQuery>(searchQueryType: new() => TSearchQuery): TSearchQuery;
  }
}

OrderSearchCriteria.prototype.toSearchQuery = function<TSearchQuery extends OrderSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
  const searchQuery = KeywordSearchCriteria.prototype.toSearchQuery.apply<OrderSearchCriteria, { new(): TSearchQuery }[], TSearchQuery>(this, [searchQueryType]);
  searchQuery.sort = this.sort;
  searchQuery.startDate = this.startDate ? moment(this.startDate).format("YYYY-MM-DD") : undefined;
  searchQuery.endDate = this.endDate ? moment(this.endDate).format("YYYY-MM-DD") : undefined;
  searchQuery.statuses = this.statuses?.length ? this.statuses.join(",") : undefined;
  return searchQuery;
}
