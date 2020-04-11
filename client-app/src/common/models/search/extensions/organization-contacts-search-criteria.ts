import {  OrganizationContactsSearchCriteria } from '@common/api/api-clients';
import { OrganizationContactsSearchQuery } from '@common/models/search/extensions/organization-contacts-search-query';
import { KeywordSearchCriteria } from '@common/models/search/keyword-search-criteria';

declare module '@common/api/api-clients' {
  interface OrganizationContactsSearchCriteria extends KeywordSearchCriteria {
    keyword?: string;
    toSearchQuery<TSearchQuery extends OrganizationContactsSearchQuery>(searchQueryType: new() => TSearchQuery): TSearchQuery;
    normalize(): void;
  }
}

Object.defineProperty(OrganizationContactsSearchCriteria.prototype, "searchPhrase", {
  get: function () { return this.keyword; },
  set: function () { this.keyword; }
});

OrganizationContactsSearchCriteria.prototype.toSearchQuery = function<TSearchQuery extends OrganizationContactsSearchQuery>(searchQueryType: { new(): TSearchQuery }): TSearchQuery {
  const searchQuery = KeywordSearchCriteria.prototype.toSearchQuery.apply<OrganizationContactsSearchCriteria, { new(): TSearchQuery }[], TSearchQuery>(this, [searchQueryType]);
  return searchQuery;
}

OrganizationContactsSearchCriteria.prototype.normalize = function() {
  KeywordSearchCriteria.prototype.normalize.apply(this);
}
