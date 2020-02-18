<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <fieldset>
      <div class="form-row form-group">
        <div class="col-md">
          <label for="login">{{ $t("account.user_name") }}</label>
          <input id="login"
                 v-model="profile.userName"
                 type="text"
                 class="form-control"
                 readonly>
        </div>
        <div class="col-md">
          <label for="email">{{ $t("account.email") }}</label>
          <input id="email"
                 v-model="profile.email"
                 type="email"
                 class="form-control">
        </div>
        <div class="col-md">
          <label for="phone">{{ $t("account.phone") }}</label>
          <input id="phone"
                 v-model="profile.phoneNumber"
                 type="text"
                 class="form-control">
        </div>
      </div>
    </fieldset>
    <button class="btn btn-primary" @click.prevent="update()">
      Update User
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { FETCH_PROFILE, UPDATE_USER } from "@account/store/modules/profile/definitions";
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
    userUpdateInfo.id = this.profile.id;
    userUpdateInfo.firstName = this.profile.firstName;
    userUpdateInfo.lastName = this.profile.lastName;
    userUpdateInfo.email = this.profile.email;
    this.updateProfile({ userUpdateInfo });
  }
}
</script>
