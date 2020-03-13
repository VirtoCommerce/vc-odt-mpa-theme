<template>
  <div class="mt-3">
    <loading :active.sync="isLoading"></loading>
    <b-button v-b-modal.addUserModal>
      {{ $t("account.users.add-user.add-user") }}
    </b-button>
    <add-user-modal @userAdded="userAdded($event)"></add-user-modal>
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
import { FETCH_PROFILE } from "@account/store/modules/profile/definitions";
import { FETCH_USERS, SET_USERS_LIST_CONFIG, ADD_USER } from "@account/store/modules/users-list/definitions";
import { UsersList, UsersListConfig, AddUserForm } from "@account/store/modules/users-list/types";
import { User,OrganizationUserRegistration, Organization } from "@common/api/api-clients";
import { pageSizes, locale } from "@common/constants";
import AddUserModal from './AddUserModal.vue';

const usersListModule = namespace("usersListModule");
const profileModule = namespace('profileModule');

@Component({
  components: {AddUserModal}
})
export default class AccountUsers extends Vue {
  @usersListModule.Getter("usersList")
  private usersList!: UsersList;

  @usersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @profileModule.Getter('profile')
  profile!: User;

  @profileModule.Action(FETCH_PROFILE)
  fetchProfile!: () => void;

  @usersListModule.Action(FETCH_USERS)
  private fetchUsers!: () => UsersList;

  @usersListModule.Action(SET_USERS_LIST_CONFIG)
  private setListConfig!: (listConfig: UsersListConfig) => void;

  @usersListModule.Action(ADD_USER)
  private addUser!: (user: OrganizationUserRegistration) => void;

  pageSizes = pageSizes;

  mounted() {
    this.fetchProfile();
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

  userAdded(newUser: AddUserForm) {
    if (this.profile.contact?.organizationId) {
      const orgId: string = this.profile.contact.organizationId;
      const registrUser = new OrganizationUserRegistration();
      registrUser.init({...newUser, organizationId: orgId });
      this.addUser(registrUser);
    }

  }

}
</script>

<style></style>
