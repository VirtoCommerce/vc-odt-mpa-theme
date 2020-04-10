import { Dictionary } from '@common/models/dictionary';
import { IPagedSearchCriteria } from '@common/models/search/paged-search-criteria';
import { safeInvoke } from '@common/utilities';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class PagedSearchQuery {
  page?: string;
  page_size?: string;

  toSearchCriteria<TSearchCriteria extends IPagedSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = new searchCriteriaType();
    searchCriteria.pageNumber = safeInvoke(this.page, page => Number(page));
    searchCriteria.pageSize = safeInvoke(this.page_size, page_size => Number(page_size));
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
