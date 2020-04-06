/* eslint-disable-next-line import/default */
import moment from 'moment';
import { OrderSearchCriteria } from '@common/api/api-clients';
import { KeywordSearchCriteria } from './keyword-search-criteria';
import { OrderSearchQuery } from './order-search-query';

declare module '@common/api/api-clients' {
  interface OrderSearchCriteria extends KeywordSearchCriteria {
    toSearchQuery<TSearchQuery extends OrderSearchQuery>(searchQueryType: new() => TSearchQuery): TSearchQuery;
    normalize(): void;
  }
}

OrderSearchCriteria.prototype.toSearchQuery = function<TSearchQuery extends OrderSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
  const searchQuery = KeywordSearchCriteria.prototype.toSearchQuery.apply<OrderSearchCriteria, { new(): TSearchQuery }[], TSearchQuery>(this, [searchQueryType]);
  searchQuery.sort = this.sort;
  const ISODateFormat = "YYYY-MM-DD";
  searchQuery.startDate = this.startDate ? moment(this.startDate).format(ISODateFormat) : undefined;
  searchQuery.endDate = this.endDate ? moment(this.endDate).format(ISODateFormat) : undefined;
  searchQuery.statuses = this.statuses?.length ? this.statuses.join(",") : undefined;
  return searchQuery;
}

OrderSearchCriteria.prototype.normalize = function() {
  KeywordSearchCriteria.prototype.normalize.apply(this);
}
