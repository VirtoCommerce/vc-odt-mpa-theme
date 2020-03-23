import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from 'vuex-class';
import { FETCH_PROFILE, UPDATE_USER } from "init/store/modules/profile/definitions";
import { User, UserUpdateInfo } from "@common/api/api-clients";

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
