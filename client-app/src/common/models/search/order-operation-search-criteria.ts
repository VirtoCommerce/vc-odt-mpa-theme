/* eslint-disable-next-line import/default */
import moment from 'moment';
import { KeywordSearchCriteria, IKeywordSearchCriteria } from '@common/models/search/keyword-search-criteria';
import { OrderOperationSearchQuery } from '@common/models/search/order-operation-search-query';

/* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
export interface IOrderOperationSearchCriteria extends IKeywordSearchCriteria {
    startDate?: Date;
    endDate?: Date;
    statuses?: string[];
    sort?: string;
}

export class OrderOperationSearchCriteria extends KeywordSearchCriteria implements IOrderOperationSearchCriteria {
    startDate?: Date;
    endDate?: Date;
    statuses?: string[];
    sort?: string;

    constructor(data?: IOrderOperationSearchCriteria) {
      super(data);
    }

    toSearchQuery<TSearchQuery extends OrderOperationSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
      const searchQuery = super.toSearchQuery<TSearchQuery>(searchQueryType);
      searchQuery.sort = this.sort;
      const ISODateFormat = "YYYY-MM-DD";
      searchQuery.startDate = this.startDate ? moment(this.startDate).format(ISODateFormat) : undefined;
      searchQuery.endDate = this.endDate ? moment(this.endDate).format(ISODateFormat) : undefined;
      searchQuery.statuses = this.statuses?.length ? this.statuses.join(",") : undefined;
      return searchQuery;
    }
}
