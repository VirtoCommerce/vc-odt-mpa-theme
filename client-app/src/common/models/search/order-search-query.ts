/* eslint-disable-next-line import/default */
import moment from 'moment';
import { IOrderSearchCriteria } from '@common/api/api-clients';
import { KeywordSearchQuery } from './keyword-search-query';
import './product-search-criteria';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class OrderSearchQuery extends KeywordSearchQuery {
  sort?: string;
  startDate?: string;
  endDate?: string;
  statuses?: string;

  toSearchCriteria<TSearchCriteria extends IOrderSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = super.toSearchCriteria(searchCriteriaType);
    searchCriteria.sort = this.sort;
    searchCriteria.startDate = this.startDate ? moment(this.startDate).toDate() : undefined;
    searchCriteria.endDate = this.endDate ? moment(this.endDate).add(1, "days").subtract(1, "seconds").toDate() : undefined;
    searchCriteria.statuses = this.statuses?.split(",") || [];
    return searchCriteria;
  }
}
