<template>
  <div>
    <h1>MPA Vue user info:</h1>
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
import { FETCH_PROFILE, UPDATE_USER } from "@account/store/definitions";

@Component
export default class AccountInfo extends Vue {
  get profile() {
    return this.$store.getters.profile;
  }
  get isLoading() {
    return this.$store.getters.isLoading;
  }
  mounted() {
    this.$store.dispatch(FETCH_PROFILE);
  }
  update() {
    this.$store.dispatch(UPDATE_USER, this.profile);
  }
}
</script>
