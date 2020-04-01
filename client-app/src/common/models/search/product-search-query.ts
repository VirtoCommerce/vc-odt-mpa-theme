import { IProductSearchCriteria } from '@common/api/api-clients';
import { KeywordSearchQuery } from './keyword-search-query';
import './product-search-criteria';
import { TermsData } from './terms-data';

/* eslint @typescript-eslint/camelcase: ["error", {properties: "never"}] */
export class ProductSearchQuery extends KeywordSearchQuery {
  page?: string;
  page_size?: string;
  q?: string;
  keyword?: string;
  sort_by?: string;
  terms?: string;

  toSearchCriteria<TSearchCriteria extends IProductSearchCriteria>(searchCriteriaType: { new(): TSearchCriteria }): TSearchCriteria {
    const searchCriteria = super.toSearchCriteria(searchCriteriaType);
    searchCriteria.sortBy = this.sort_by;
    searchCriteria.termsData = new TermsData().deserialize(this.terms);
    return searchCriteria;
  }
}
