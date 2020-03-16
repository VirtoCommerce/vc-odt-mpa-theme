
<template>
  <div v-if="usersFilter">
    <div class="d-flex flex-wrap flex-sm-row flex-column">
      <div class="flex-grow-1 mr-sm-2">
        <label for="keyword-search">{{ $t("account.users.keyword-search-title") }}</label>
        <b-form-input
          id="keyword-search"
          type="text"
          :debounce="1000"
          :placeholder="$t('account.users.enter-keyword')"
          :value="usersFilter.keyword"
          @update="changeKeyword($event)"></b-form-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./users-filter.ts">


