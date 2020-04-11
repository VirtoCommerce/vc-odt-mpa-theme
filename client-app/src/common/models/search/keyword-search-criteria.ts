import { KeywordSearchQuery } from '@common/models/search/keyword-search-query';
import { PagedSearchCriteria, IPagedSearchCriteria } from '@common/models/search/paged-search-criteria';

/* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
export interface IKeywordSearchCriteria extends IPagedSearchCriteria {
  keyword?: string;
}

export class KeywordSearchCriteria extends PagedSearchCriteria implements IKeywordSearchCriteria {
  keyword?: string;

  constructor(data?: IKeywordSearchCriteria) {
    super(data);
  }

  toSearchQuery<TSearchQuery extends KeywordSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
    const searchQuery = super.toSearchQuery<TSearchQuery>(searchQueryType);
    searchQuery.keyword = this.keyword;
    return searchQuery;
  }
}
