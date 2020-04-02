import { SearchCriteria } from '../models/search/search-criteria';
import { SearchQuery } from '../models/search/search-query';

export class QueryBuilder<
TSearchCriteria extends SearchCriteria,
TSearchQuery extends SearchQuery> {

  constructor(
    private searchCriteriaType: { new(): TSearchCriteria },
    private searchQueryType: { new(): TSearchQuery }) {
  }

  buildQuery(searchCriteria: TSearchCriteria): object {
    return searchCriteria.toSearchQuery(this.searchQueryType).normalize();
  }

  buildURLSearchParams(searchCriteria: TSearchCriteria): URLSearchParams {
    return new URLSearchParams(Object.entries(this.buildQuery(searchCriteria)) as string[][])
  }

  parseQuery(queryObject: object): TSearchCriteria {
    const searchQuery = new this.searchQueryType();
    Object.assign(searchQuery, queryObject);
    return searchQuery.toSearchCriteria(this.searchCriteriaType);
  }

  parseURLSearchParams(query: URLSearchParams): TSearchCriteria {
    const queryObject: { [key: string]: string } = {};
    for (const [key, value] of query.entries()) {
      queryObject[key] = value;
    }
    return this.parseQuery(queryObject);
  }
}
