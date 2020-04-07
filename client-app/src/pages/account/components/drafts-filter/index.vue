
<template>
  <div v-if="searchCriteria">
    <div class="d-flex flex-wrap flex-sm-row flex-column">
      <div class="flex-grow-1 mr-sm-2">
        <label for="keyword-search">{{ $t("account.drafts.keyword") }}</label>
        <b-form-input
          id="keyword-search"
          type="text"
          :debounce="1000"
          :placeholder="$t('account.drafts.keyword')"
          :value="searchCriteria.name"
          @update="changeKeyword($event)"></b-form-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./drafts-filter.ts">


