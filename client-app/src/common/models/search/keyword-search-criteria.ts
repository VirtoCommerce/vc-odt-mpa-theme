import { KeywordSearchQuery } from './keyword-search-query';
import { SearchCriteria } from './search-criteria';

/* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
export interface IKeywordSearchCriteria {
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
}

export class KeywordSearchCriteria extends SearchCriteria implements IKeywordSearchCriteria {
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;

  constructor(data?: IKeywordSearchCriteria) {
    super(data);
  }

  toSearchQuery<TSearchQuery extends KeywordSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
    const searchQuery = super.toSearchQuery<TSearchQuery>(searchQueryType);
    searchQuery.keyword = this.keyword
    return searchQuery;
  }
}
