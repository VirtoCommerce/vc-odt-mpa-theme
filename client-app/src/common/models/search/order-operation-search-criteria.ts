/* eslint-disable-next-line import/default */
import moment from 'moment';
import { isoDateFormat } from '@common/constants';
import { KeywordSearchCriteria, IKeywordSearchCriteria } from '@common/models/search/keyword-search-criteria';
import { OrderOperationSearchQuery } from '@common/models/search/order-operation-search-query';
import { safeInvoke } from '@common/utilities';

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
      searchQuery.startDate = safeInvoke(this.startDate, startDate => moment(startDate).format(isoDateFormat));
      searchQuery.endDate = safeInvoke(this.endDate, endDate => moment(endDate).format(isoDateFormat));
      searchQuery.statuses = this.statuses?.join(",");
      return searchQuery;
    }
}
