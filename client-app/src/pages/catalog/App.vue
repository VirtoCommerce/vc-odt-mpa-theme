<template>
  <div>
    <h1>{{ searchCriteria }}</h1>
    <h2>{{ searchQuery }}</h2>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ProductSearchCriteria } from "@common/models/search/product-search-criteria.ts";
import { ProductSearchQuery } from "@common/models/search/product-search-query.ts";
import { QueryBuilder } from "@common/services/query-builder.service.ts";

@Component({
  name: "Catalog"
})
export default class App extends Vue {
  get searchCriteria() {
    const t1 = new URL(location.href).searchParams;
    const t = new QueryBuilder(ProductSearchCriteria, ProductSearchQuery).fromQuery(t1);
    //t.terms.toggle("Brand", "Prostejov Malting");
    return t;
  }
  get searchQuery() {
    return new QueryBuilder(ProductSearchCriteria, ProductSearchQuery).toQuery(this.searchCriteria).toString();
  }
}
</script>
