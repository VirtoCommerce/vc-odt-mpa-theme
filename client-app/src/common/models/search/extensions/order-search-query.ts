/* eslint-disable-next-line import/default */
import { IOrderSearchCriteria } from '@common/api/api-clients';
import '@common/models/search/extensions/order-search-criteria';
import { OrderOperationSearchQuery } from '@common/models/search/order-operation-search-query';

export class OrderSearchQuery extends OrderOperationSearchQuery {
  toSearchCriteria<TSearchCriteria extends IOrderSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = super.toSearchCriteria(searchCriteriaType);
    return searchCriteria;
  }
}
