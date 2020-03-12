<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div v-if="!isLoading">
      <p>{{ $t("account.users.grid.text-above") }}</p>
      <b-table
        id="users-table"
        stacked="md"
        striped
        hover
        :show-empty="true"
        :empty-text="$t('account.users.no-users')"
        :items="usersList.users"
        :fields="usersList.listConfig.columns"
        no-local-sorting
        @sort-changed="sortChanged">
      </b-table>

      <div class="d-flex justify-content-between">
        <b-pagination
          :value="usersList.listConfig.pageNumber"
          aria-controls="users-table"
          :total-rows="usersList.totalCount"
          :per-page="usersList.listConfig.pageSize"
          @change="pageChanged($event)"></b-pagination>
        <div>
          <select
            :value="usersList.listConfig.pageSize"
            class="form-control"
            @change="pageSizeChanged($event.target.value)">
            <option v-for="pageSize in pageSizes"
                    :key="pageSize"
                    :value="pageSize">
              {{ pageSize }}
            </option>
          </select>
        </div>
      </div>
      <p>{{ $t("account.users.grid.text-below") }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages } from "vue-i18n";
import { namespace } from "vuex-class";
import i18n from "@i18n";
import { BvTableCtxObject } from "bootstrap-vue";
import { FETCH_USERS, SET_USERS_LIST_CONFIG } from "@account/store/modules/users-list/definitions";
import { UsersList, UsersListConfig } from "@account/store/modules/users-list/types";
import { pageSizes, locale } from "@common/constants";

const usersListModule = namespace("usersListModule");

@Component
export default class AccountUsers extends Vue {
  @usersListModule.Getter("usersList")
  private usersList!: UsersList;

  @usersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @usersListModule.Action(FETCH_USERS)
  private fetchUsers!: () => UsersList;

  @usersListModule.Action(SET_USERS_LIST_CONFIG)
  private setListConfig!: (listConfig: UsersListConfig) => void;

  pageSizes = pageSizes;

  mounted() {
    this.fetchUsers();
  }

  pageChanged(page: number) {
    this.setListConfig({ ...this.usersList.listConfig, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.setListConfig({ ...this.usersList.listConfig, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const listConfig = { ...this.usersList.listConfig, pageNumber: 1 };
    listConfig.filters = { ...this.usersList.listConfig.filters, sort: sortExpression };
    this.setListConfig(listConfig);
  }


}
</script>

<style></style>
