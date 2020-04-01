import { SearchQuery } from './search-query';

/* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
export interface ISearchCriteria {
  pageNumber?: number;
  pageSize?: number;
}

export class SearchCriteria implements ISearchCriteria {
  pageNumber?: number;
  pageSize?: number;

  constructor(data?: ISearchCriteria) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  toSearchQuery<TSearchQuery extends SearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
    const searchQuery = new searchQueryType();
    searchQuery.page = this.pageNumber?.toString();
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    searchQuery.page_size = this.pageSize?.toString();
    return searchQuery;
  }
}
