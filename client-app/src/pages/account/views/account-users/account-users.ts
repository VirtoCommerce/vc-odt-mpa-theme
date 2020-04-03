import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import i18n from "@i18n";
import { BvTableCtxObject } from "bootstrap-vue";
import { FETCH_PROFILE } from 'plugins/authorization/store-profile/definitions';
import AddUserModal from "@account/components/add-user-modal/index.vue";
import EditUserModal from '@account/components/edit-user-modal/index.vue';
import UsersFilter from "@account/components/users-filter/index.vue";
import { AddUser } from "@account/models/add-user";
import { FETCH_USERS, SET_USERS_LIST_CONFIG, DELETE_USER, ADD_USER, UPDATE_USER } from "@account/store/modules/users-list/definitions";
import { UsersList, UsersListConfig, UsersListFilters} from "@account/store/modules/users-list/types";
import { User,OrganizationUserRegistration, UserUpdateInfo } from "@common/api/api-clients";
import { pageSizes } from "@common/constants";

const usersListModule = namespace("usersListModule");
const profileModule = namespace('profileModule');

@Component({
  components: {
    AddUserModal,
    UsersFilter,
    EditUserModal
  }
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

  @usersListModule.Action(DELETE_USER)
  private deleteUser!: (userId: string) => void;

  @usersListModule.Action(UPDATE_USER)
  private updateUser!: (user: UserUpdateInfo) => void;

  pageSizes = pageSizes;

  editIcon = faEdit

  deleteIcon = faTrashAlt;

  selectedUser: User | null  = null;

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

  checkActivePageSize(pageSize: number) {
    return pageSize == this.usersList.listConfig.pageSize ? true : false;
  }

  filtersChanged(filters: UsersListFilters) {
    this.setListConfig({ ...this.usersList.listConfig, filters });
  }

  openEditUserModal(user: User) {
    this.selectedUser = user;
    this.$bvModal.show("editUserModal");
  }

  confirmDeleteUser(user: User) {
    this.$bvModal.msgBoxConfirm(i18n.t('account.users.confirm-delete-modal.message', [ user.userName ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.users.confirm-delete-modal.title') as string,
      okTitle: i18n.t('account.users.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('account.users.confirm-delete-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    })
      .then(value => {
        if(value) {
          this.deleteUser(user.id!);
        }
      });
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

}
