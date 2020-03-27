import { SearchQuery } from './search-query';

export class SearchCriteria {
  constructor(
    public pageNumber?: number,
    public pageSize?: number
  ){}

  toSearchQuery<TSearchQuery extends SearchQuery>(searchQueryType: { new(...args: any[]): TSearchQuery }): TSearchQuery {
    const searchQuery = new searchQueryType();
    searchQuery.page = this.pageNumber?.toString();
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    searchQuery.page_size = this.pageSize?.toString();
    return searchQuery;
  }
}
