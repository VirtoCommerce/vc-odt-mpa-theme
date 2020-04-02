import { ProductSearchCriteria } from '@common/api/api-clients';
import { KeywordSearchCriteria, IKeywordSearchCriteria } from './keyword-search-criteria';
import { ProductSearchQuery } from './product-search-query';
import { TermsData } from './terms-data';

declare module '@common/api/api-clients' {
  /* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
  interface IProductSearchCriteria extends IKeywordSearchCriteria {
    termsData?: TermsData;
  }

  interface ProductSearchCriteria extends IProductSearchCriteria {
    termsData?: TermsData;
    toSearchQuery<TSearchQuery extends ProductSearchQuery>(searchQueryType: new() => TSearchQuery): TSearchQuery;
  }
}

Object.defineProperty(ProductSearchCriteria.prototype, "terms", {
  get: function () { return this.termsData.serializeValues(); },
  set: function () { this.termsData.deserializeValues(this.terms); }
});

ProductSearchCriteria.prototype.toSearchQuery = function<TSearchQuery extends ProductSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
  const searchQuery = KeywordSearchCriteria.prototype.toSearchQuery<TSearchQuery>(searchQueryType);
  /* eslint-disable-next-line @typescript-eslint/camelcase */
  searchQuery.sort_by = this.sortBy;
  searchQuery.terms = this.termsData?.serialize();
  return searchQuery;
}