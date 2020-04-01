import { ISearchCriteria } from './search-criteria';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class SearchQuery {
  page?: string;
  page_size?: string;

  toSearchCriteria<TSearchCriteria extends ISearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = new searchCriteriaType();
    searchCriteria.pageNumber = this.page ? Number(this.page) : undefined;
    searchCriteria.pageSize = this.page_size ? Number(this.page_size) : undefined;
    return searchCriteria;
  }

  normalize<TSearchQuery extends SearchQuery>(): TSearchQuery {
    const obj = this as any;
    for (const key of Object.keys(obj)) {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj as TSearchQuery;
  }
}
