import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from 'vuex-class';
import { User, UserUpdateInfo } from "core/api/api-clients";
import { FETCH_PROFILE, UPDATE_USER } from 'libs/authorization/store/profile/definitions';

const profileModule = namespace('profileModule');

@Component
export default class AccountInfo extends Vue {
  @profileModule.Getter('profile')
  profile!: User;
  @profileModule.Getter('isLoading')
  isLoading!: boolean;

  @profileModule.Action(FETCH_PROFILE)
  fetchProfile!: () => void;
  @profileModule.Action(UPDATE_USER)
  updateProfile!: ( payload: { userUpdateInfo: UserUpdateInfo }) => void;

  mounted() {
    this.fetchProfile();
  }
  update() {
    const userUpdateInfo =  new UserUpdateInfo();
    Object.assign(userUpdateInfo, this.profile);

    this.updateProfile({ userUpdateInfo });
  }
}
