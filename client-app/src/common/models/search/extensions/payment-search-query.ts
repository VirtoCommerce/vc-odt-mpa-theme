/* eslint-disable-next-line import/default */
import { IPaymentSearchCriteria } from '@common/api/api-clients';
import '@common/models/search/extensions/payment-search-criteria';
import { OrderOperationSearchQuery } from '@common/models/search/order-operation-search-query';

export class PaymentSearchQuery extends OrderOperationSearchQuery {
  toSearchCriteria<TSearchCriteria extends IPaymentSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    return super.toSearchCriteria(searchCriteriaType);
  }
}
