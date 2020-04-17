import Vue from "vue";
import Component from "vue-class-component";
import { Route, RawLocation } from 'vue-router';
import { namespace } from "vuex-class";
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import i18n from "@i18n";
import { BvTableCtxObject } from "bootstrap-vue";
import { User,OrganizationUserRegistration, UserUpdateInfo, IOrganizationContactsSearchCriteria, IUserSearchResult, IUser, OrganizationContactsSearchCriteria } from "core/api/api-clients";
import { pageSizes, sortDescending, sortAscending } from "core/constants";
import { OrganizationContactsSearchQuery } from 'core/models/search/extensions/organization-contacts-search-query';
import { QueryBuilder } from 'core/services/query-builder.service';
import { FETCH_PROFILE } from 'libs/authorization/store/profile/definitions';
import AddUserModal from "libs/user/components/add-user-modal/index.vue";
import EditUserModal from 'libs/user/components/edit-user-modal/index.vue';
import UsersFilter from "libs/user/components/users-filter/index.vue";
import { AddUser } from "libs/user/models/add-user";
import { DELETE_USER, ADD_USER, UPDATE_USER, SET_USERS_SEARCH_CRITERIA, FETCH_SELECTED_USER, SUSPEND_USER, UNSUSPEND_USER } from "libs/user/store/users-list/definitions";

const usersListModule = namespace("usersListModule");
const profileModule = namespace('profileModule');

@Component({
  components: {
    AddUserModal,
    UsersFilter,
    EditUserModal
  },
  beforeRouteUpdate: function (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: AccountUsers) => any) | void) => void) {
    (this as AccountUsers).buildSearchCriteria(to);
    next();
  }
})
export default class AccountUsers extends Vue {
  @usersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @usersListModule.Getter("columns")
  private columns!: boolean;

  @usersListModule.Getter("searchCriteria")
  private searchCriteria!: IOrganizationContactsSearchCriteria;

  @usersListModule.Action(SET_USERS_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: IOrganizationContactsSearchCriteria) => void;

  @usersListModule.Getter("users")
  private users!: IUserSearchResult;

  @usersListModule.Getter("selectedUser")
  private selectedUser!: IUser | null;

  @usersListModule.Action(FETCH_SELECTED_USER)
  private fetchSelectedUser!: (userId: string) => IUser;

  @usersListModule.Action(ADD_USER)
  private addUser!: (user: OrganizationUserRegistration) => void;

  @usersListModule.Action(DELETE_USER)
  private deleteUser!: (userId: string) => void;

  @usersListModule.Action(UPDATE_USER)
  private updateUser!: (user: UserUpdateInfo) => void;

  @usersListModule.Action(SUSPEND_USER)
  private suspendUser!: (userId: string) => void;

  @usersListModule.Action(UNSUSPEND_USER)
  private unsuspendUser!: (userId: string) => void;

  @profileModule.Getter('profile')
  profile!: User;

  @profileModule.Action(FETCH_PROFILE)
  fetchProfile!: () => void;

  pageSizes = pageSizes;

  editIcon = faEdit;
  deleteIcon = faTrashAlt;
  suspendIcon = faLock;
  unsuspendIcon = faUnlock;

  queryBuilder = new QueryBuilder(OrganizationContactsSearchCriteria, OrganizationContactsSearchQuery);

  mounted() {
    this.fetchProfile();
    this.buildSearchCriteria(this.$route, this.searchCriteria);
  }

  buildSearchCriteria(route: Route, initialSearchCriteria?: IOrganizationContactsSearchCriteria) {
    const searchCriteria = this.queryBuilder.parseQuery(route.query);
    this.setSearchCriteria({
      ...initialSearchCriteria,
      ...searchCriteria
    });
  }

  pageChanged(pageNumber: number) {
    this.searchCriteriaChanged({ ...this.searchCriteria, pageNumber });
  }

  pageSizeChanged(pageSize: number) {
    this.searchCriteriaChanged({ ...this.searchCriteria, pageNumber: 1, pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? sortDescending : sortAscending;
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const searchCriteria = { ...this.searchCriteria, pageNumber: 1, sort: sortExpression };
    this.searchCriteriaChanged(searchCriteria);
  }

  checkActivePageSize(pageSize: number) {
    return pageSize == this.searchCriteria.pageSize ? true : false;
  }

  searchCriteriaChanged(searchCriteria: IOrganizationContactsSearchCriteria) {
    const query = this.queryBuilder.buildQuery(new OrganizationContactsSearchCriteria(searchCriteria));
    this.$router.push({
      ...this.$route,
      query
    });
  }

  openEditUserModal(user: User) {
    this.fetchSelectedUser(user.id!);
    this.$bvModal.show("editUserModal");
  }

  userAdded(newUser: AddUser) {
    if (this.profile.contact?.organizationId) {
      const orgId: string = this.profile.contact.organizationId;
      const registerUser = new OrganizationUserRegistration();
      registerUser.init({...newUser, organizationId: orgId });
      this.addUser(registerUser);
    }
  }

  userChanged(updatedUser: UserUpdateInfo) {
    this.updateUser(updatedUser);
  }

  async confirmDeleteUser(user: User) {
    const value = await this.$bvModal.msgBoxConfirm(i18n.t('account.users.confirm-delete-modal.message', [ user.userName ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.users.confirm-delete-modal.title') as string,
      okTitle: i18n.t('account.users.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('account.users.confirm-delete-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    });
    if(value) {
      this.deleteUser(user.id!);
    }
  }

  async changeUserSuspensionStatus(user: User, suspend: boolean) {
    const localizationType = (suspend == true) ? 'suspend' : 'unsuspend';
    const value = await this.$bvModal.msgBoxConfirm(i18n.t(`account.users.confirm-${localizationType}-modal.message`, [ user.userName ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t(`account.users.confirm-${localizationType}-modal.title`) as string,
      okTitle: i18n.t(`account.users.confirm-${localizationType}-modal.ok`) as string,
      cancelTitle: i18n.t(`account.users.confirm-${localizationType}-modal.cancel`) as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    });
    if(value) {
      if (suspend) {
        this.suspendUser(user.id!);
      } else {
        this.unsuspendUser(user.id!);
      }
    }
  }

  isCurrentUser(user: User) {
    return this.profile.id == user.id;
  }

}
