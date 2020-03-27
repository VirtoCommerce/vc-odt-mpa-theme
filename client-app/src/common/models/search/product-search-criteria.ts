import { KeywordSearchCriteria } from './keyword-search-criteria';
import { ProductSearchQuery } from './product-search-query';
import { Terms } from './terms';

export class ProductSearchCriteria extends KeywordSearchCriteria {
  constructor(
    public pageNumber?: number,
    public pageSize?: number,
    public keyword?: string,
    public sortBy?: string,
    public terms?: Terms
  ){
    super(pageNumber, pageSize, keyword);
  }

  toSearchQuery<TSearchQuery extends ProductSearchQuery>(searchQueryType: { new(...args: any[]): TSearchQuery }): TSearchQuery {
    const searchQuery = super.toSearchQuery<TSearchQuery>(searchQueryType);
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    searchQuery.sort_by = this.sortBy;
    searchQuery.terms = this.terms?.serialize();
    return searchQuery;
  }
}
