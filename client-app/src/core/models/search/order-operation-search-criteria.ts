import { isoDateFormat } from 'core/constants';
import { KeywordSearchCriteria, IKeywordSearchCriteria } from 'core/models/search/keyword-search-criteria';
import { OrderOperationSearchQuery } from 'core/models/search/order-operation-search-query';
/* eslint-disable-next-line import/default */
import   moment from 'moment';
import { safeInvoke } from '@core/utilities/utilities';

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
      searchQuery.statuses = safeInvoke(this.statuses, statuses => statuses.join(","));
      return searchQuery;
    }
}
