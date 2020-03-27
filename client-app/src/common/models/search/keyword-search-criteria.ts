import { KeywordSearchQuery } from './keyword-search-query';
import { SearchCriteria } from './search-criteria';

export class KeywordSearchCriteria extends SearchCriteria {
  constructor(
    public pageNumber?: number,
    public pageSize?: number,
    public keyword?: string
  ){
    super(pageNumber, pageSize);
  }

  toSearchQuery<TSearchQuery extends KeywordSearchQuery>(searchQueryType: { new(...args: any[]): TSearchQuery }): TSearchQuery {
    const searchQuery = super.toSearchQuery<TSearchQuery>(searchQueryType);
    searchQuery.keyword = this.keyword
    return searchQuery;
  }
}
