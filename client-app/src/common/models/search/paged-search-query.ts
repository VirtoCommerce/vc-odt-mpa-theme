import { safeInvoke } from '@common/helpers/utilities';
import { IPagedSearchCriteria } from '@common/models/search/paged-search-criteria';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class PagedSearchQuery {
  page?: string;
  page_size?: string;

  toSearchCriteria<TSearchCriteria extends IPagedSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = new searchCriteriaType();
    searchCriteria.pageNumber = safeInvoke(this.page, page => Number(page));
    searchCriteria.pageSize = safeInvoke(this.page_size, pageSize => Number(pageSize));
    return searchCriteria;
  }
}
