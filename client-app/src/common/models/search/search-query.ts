import { SearchCriteria } from './search-criteria';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class SearchQuery {
  constructor(
    public page?: string,
    public page_size?: string
  ){}

  toSearchCriteria<TSearchCriteria extends SearchCriteria>(searchCriteriaType: { new(...args: any[]): TSearchCriteria }): TSearchCriteria {
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
