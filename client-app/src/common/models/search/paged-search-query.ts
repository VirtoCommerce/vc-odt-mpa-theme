import { Dictionary } from '@common/models/dictionary';
import { IPagedSearchCriteria } from '@common/models/search/paged-search-criteria';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class PagedSearchQuery {
  page?: string;
  page_size?: string;

  toSearchCriteria<TSearchCriteria extends IPagedSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = new searchCriteriaType();
    searchCriteria.pageNumber = this.page ? Number(this.page) : undefined;
    searchCriteria.pageSize = this.page_size ? Number(this.page_size) : undefined;
    return searchCriteria;
  }

  toDictionary(): Dictionary<string | (string | null)[] | null | undefined> {
    const result: Dictionary<string> = {};
    const searchQuery = this as any;
    for (const key of Object.keys(searchQuery)) {
      if (searchQuery[key] !== undefined) {
        result[key] = searchQuery[key];
      }
    }
    return result;
  }
}
