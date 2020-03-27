import { KeywordSearchCriteria } from './keyword-search-criteria';
import { SearchQuery } from './search-query';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class KeywordSearchQuery extends SearchQuery {
  constructor(
    public page?: string,
    public page_size?: string,
    public q?: string,
    public keyword?: string
  ){
    super(page, page_size);
  }

  toSearchCriteria<TSearchCriteria extends KeywordSearchCriteria>(searchCriteriaType: { new(...args: any[]): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = super.toSearchCriteria(searchCriteriaType);
    searchCriteria.keyword = this.q || this.keyword;
    return searchCriteria;
  }
}
