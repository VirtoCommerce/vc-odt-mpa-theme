import chai, { expect } from "chai";
import "chai-string";
import { ProductSearchCriteria } from '@common/api/api-clients';
import { KeywordSearchCriteria } from '@common/models/search/keyword-search-criteria';
import { KeywordSearchQuery } from '@common/models/search/keyword-search-query';
import { ProductSearchQuery } from '@common/models/search/product-search-query';
import { TermsData } from '@common/models/search/terms-data';
import { QueryBuilder } from "@common/services/query-builder.service";
import '@common/models/search/product-search-criteria';

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
    const searchCriteria = new KeywordSearchCriteria({
      pageNumber: 1,
      pageSize: 30,
      keyword: "test"
    });

    const query = keywordQueryBuilder.toQuery(searchCriteria);

    expect(query.toString()).to.be.equalIgnoreCase("page=1&page_size=30&keyword=test");
  });

  it("should correctly build partial query", () => {
    const searchCriteria = new KeywordSearchCriteria({
      keyword: "test"
    });

    const query = keywordQueryBuilder.toQuery(searchCriteria);

    expect(query.toString()).to.be.equalIgnoreCase("keyword=test");
  });
});

describe("terms: parse and build", () => {
  const productQueryBuilder = new QueryBuilder(ProductSearchCriteria, ProductSearchQuery);

  it("should correctly parse sorting and terms", () => {
    const query = new URLSearchParams("sort_by=createddate-descending&terms=Brand%3a3DR%2cDJI%3bprice%3aover-1000");

    const searchCriteria = productQueryBuilder.fromQuery(query);

    expect(searchCriteria.sortBy).to.be.equal("createddate-descending");
    expect(searchCriteria.termsData?.data).to.have.property("Brand");
    expect(searchCriteria.termsData?.data["Brand"]).to.include("3DR");
    expect(searchCriteria.termsData?.data["Brand"]).to.include("DJI");
    expect(searchCriteria.termsData?.data).to.have.property("price");
    expect(searchCriteria.termsData?.data["price"]).to.include("over-1000");
  });

  it("should correctly build query with sorting and terms", () => {
    const searchCriteria = new ProductSearchCriteria({ sortBy: "createddate-descending" });
    searchCriteria.termsData = new TermsData();
    searchCriteria.termsData.data["Brand"] = ["3DR", "DJI"];
    searchCriteria.termsData.data["price"] = ["over-1000"];

    const query = productQueryBuilder.toQuery(searchCriteria).toString();

    expect(query).to.be.equalIgnoreCase("sort_by=createddate-descending&terms=Brand%3a3DR%2cDJI%3bprice%3aover-1000");
  });
});

describe("terms: toggle", () => {
  const productQueryBuilder = new QueryBuilder(ProductSearchCriteria, ProductSearchQuery);
  const searchCriteria = new ProductSearchCriteria();
  searchCriteria.termsData = new TermsData();
  searchCriteria.termsData.data["Brand"] = ["3DR", "DJI"];
  searchCriteria.termsData.data["price"] = ["over-1000"];

  it("should remove existing value from terms", () => {
    searchCriteria.termsData?.toggle("Brand", "3DR");
    const query = productQueryBuilder.toQuery(searchCriteria).toString();

    expect(query).to.be.equalIgnoreCase("terms=Brand%3aDJI%3bprice%3aover-1000");
  });

  it("should remove key from terms", () => {
    searchCriteria.termsData?.toggle("price", "over-1000");
    const query = productQueryBuilder.toQuery(searchCriteria).toString();

    expect(query).to.be.equalIgnoreCase("terms=Brand%3aDJI");
  });

  it("should add new key and value to terms", () => {
    searchCriteria.termsData?.toggle("price", "600-1000");
    const query = productQueryBuilder.toQuery(searchCriteria).toString();

    expect(query).to.be.equalIgnoreCase("terms=Brand%3aDJI%3bprice%3a600-1000");
  });

  it("should add value to existing key in terms", () => {
    searchCriteria.termsData?.toggle("price", "over-1000");
    const query = productQueryBuilder.toQuery(searchCriteria).toString();

    expect(query).to.be.equalIgnoreCase("terms=Brand%3aDJI%3bprice%3a600-1000%2cover-1000");
  });
});
