import { Dictionary } from '@common/models/dictionary';
import { PagedSearchCriteria } from '@common/models/search/paged-search-criteria';
import { PagedSearchQuery } from '@common/models/search/paged-search-query';

export class QueryBuilder<
TSearchCriteria extends PagedSearchCriteria,
TSearchQuery extends PagedSearchQuery> {

  constructor(
    private searchCriteriaType: { new(): TSearchCriteria },
    private searchQueryType: { new(): TSearchQuery }) {
  }

  buildQuery(searchCriteria: TSearchCriteria): Dictionary<string | (string | null)[] | null | undefined> {
    return searchCriteria.toSearchQuery(this.searchQueryType).toDictionary();
  }

  buildURLSearchParams(searchCriteria: TSearchCriteria): URLSearchParams {
    return new URLSearchParams(Object.entries(this.buildQuery(searchCriteria)) as string[][]);
  }

  parseQuery(queryObject: Dictionary<string | (string | null)[] | null | undefined>): TSearchCriteria {
    const searchQuery = new this.searchQueryType();
    Object.assign(searchQuery, queryObject);
    const searchCriteria = searchQuery.toSearchCriteria(this.searchCriteriaType);
    searchCriteria.normalize();
    return searchCriteria;
  }

  parseURLSearchParams(query: URLSearchParams): TSearchCriteria {
    const queryObject: { [key: string]: string } = {};
    for (const [key, value] of query.entries()) {
      queryObject[key] = value;
    }
    return this.parseQuery(queryObject);
  }
}
