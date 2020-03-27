import chai, { expect } from "chai";
import "chai-string";
import { KeywordSearchCriteria } from '@common/models/search/keyword-search-criteria';
import { KeywordSearchQuery } from '@common/models/search/keyword-search-query';
import { ProductSearchCriteria } from '@common/models/search/product-search-criteria';
import { ProductSearchQuery } from '@common/models/search/product-search-query';
import { Terms } from '@common/models/search/terms';
import { QueryBuilder } from "@common/services/query-builder.service";

// workaround because of unstable build caused by broken .d.ts
// eslint-disable-next-line @typescript-eslint/no-var-requires
chai.use(require("chai-string"));

describe("query builder", () => {
  const keywordQueryBuilder = new QueryBuilder(KeywordSearchCriteria, KeywordSearchQuery);

  it("should correctly parse query", () => {
    const query = new URLSearchParams("page=1&page_size=30&keyword=test");
    const searchCriteria = keywordQueryBuilder.fromQuery(query);
    expect(searchCriteria.pageNumber).to.be.equal(1);
    expect(searchCriteria.pageSize).to.be.equal(30);
    expect(searchCriteria.keyword).to.be.equal("test");
  });

  it("should correctly parse partial query", () => {
    const query = new URLSearchParams("page_size=30");
    const searchCriteria = keywordQueryBuilder.fromQuery(query);
    expect(searchCriteria.pageNumber).to.be.equal(undefined);
    expect(searchCriteria.pageSize).to.be.equal(30);
    expect(searchCriteria.keyword).to.be.equal(undefined);
  });

  it("should correctly build query", () => {
    const searchCriteria = new KeywordSearchCriteria(1, 30, "test");
    const query = keywordQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("page=1&page_size=30&keyword=test");
  });

  it("should correctly build partial query", () => {
    const searchCriteria = new KeywordSearchCriteria(undefined, undefined, "test");
    const query = keywordQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("keyword=test");
  });
});

describe("terms: parse and build", () => {
  const productQueryBuilder = new QueryBuilder(ProductSearchCriteria, ProductSearchQuery);
  const query = new URLSearchParams("sort_by=createddate-descending&terms=Brand%3a3DR%2cDJI%3bprice%3aover-1000");

  it("should correctly parse sorting and terms", () => {
    const searchCriteria = productQueryBuilder.fromQuery(query);
    expect(searchCriteria.sortBy).to.be.equal("createddate-descending");
    expect(searchCriteria.terms?.items).to.have.property("Brand");
    expect(searchCriteria.terms?.items["Brand"]).to.include("3DR");
    expect(searchCriteria.terms?.items["Brand"]).to.include("DJI");
    expect(searchCriteria.terms?.items).to.have.property("price");
    expect(searchCriteria.terms?.items["price"]).to.include("over-1000");
  });

  it("should correctly build query with sorting and terms", () => {
    const searchCriteria = new ProductSearchCriteria(undefined, undefined, undefined, "createddate-descending");
    searchCriteria.terms = new Terms();
    searchCriteria.terms.items["Brand"] = ["3DR", "DJI"];
    searchCriteria.terms.items["price"] = ["over-1000"];
    const query = productQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("sort_by=createddate-descending&terms=Brand%3a3DR%2cDJI%3bprice%3aover-1000");
  });
});

describe("terms: toggle", () => {
  const productQueryBuilder = new QueryBuilder(ProductSearchCriteria, ProductSearchQuery);
  const searchCriteria = new ProductSearchCriteria();
  searchCriteria.terms = new Terms();
  searchCriteria.terms.items["Brand"] = ["3DR", "DJI"];
  searchCriteria.terms.items["price"] = ["over-1000"];

  it("should remove existing value from terms", () => {
    searchCriteria.terms?.toggle("Brand", "3DR");
    const query = productQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("terms=Brand%3aDJI%3bprice%3aover-1000");
  });

  it("should remove key from terms", () => {
    searchCriteria.terms?.toggle("price", "over-1000");
    const query = productQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("terms=Brand%3aDJI");
  });

  it("should add new key and value to terms", () => {
    // Add new value
    searchCriteria.terms?.toggle("price", "600-1000");
    const query = productQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("terms=Brand%3aDJI%3bprice%3a600-1000");
  });

  it("should add value to existing key in terms", () => {
    // Add value to existing key
    searchCriteria.terms?.toggle("price", "over-1000");
    const query = productQueryBuilder.toQuery(searchCriteria);
    expect(query.toString()).to.be.equalIgnoreCase("terms=Brand%3aDJI%3bprice%3a600-1000%2cover-1000");
  });
});
