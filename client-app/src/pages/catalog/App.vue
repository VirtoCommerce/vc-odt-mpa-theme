<template>
  <div>
    <h1>{{ searchCriteria }}</h1>
    <h2>{{ searchQuery }}</h2>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Catalog"
})
export default class App extends Vue {}
</script>
