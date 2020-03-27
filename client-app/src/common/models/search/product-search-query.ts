import { KeywordSearchQuery } from './keyword-search-query';
import { ProductSearchCriteria } from './product-search-criteria';
import { Terms } from './terms';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class ProductSearchQuery extends KeywordSearchQuery {
  constructor(
    public page?: string,
    public page_size?: string,
    public q?: string,
    public keyword?: string,
    public sort_by?: string,
    public terms?: string
  ){
    super(page, page_size, keyword);
  }

  toSearchCriteria<TSearchCriteria extends ProductSearchCriteria>(searchCriteriaType: { new(...args: any[]): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = super.toSearchCriteria(searchCriteriaType);
    searchCriteria.sortBy = this.sort_by;
    searchCriteria.terms = new Terms().deserialize(this.terms);
    return searchCriteria;
  }
}
