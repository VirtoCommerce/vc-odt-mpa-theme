<template>
  <div class="account mb-3">
    <loading :active.sync="isLoading"></loading>

    <div class="d-flex flex-grow-1 justify-content-center mt-3">
      <b-button variant="danger"
                @click="throwError()">
        Throw error from vue.js
      </b-button>
    </div>

    <h1>MPA Vue user info:</h1>

    <!-- Tabs work not js only css -->
    <div class="tabs">
      <input id="tab-1"
             class="tabs__input"
             type="radio"
             name="tabs"
             checked>
      <label for="tab-1" class="tabs__item">
        User Details
        <!-- <span class="mobile-name">User Details</span> -->
      </label>
      <div class="tabs__content">
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
        <button class="btn btn-primary"
                @click.prevent="update()">
          Update User
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Loading from "vue-loading-overlay";
import { FETCH_PROFILE, UPDATE_USER } from "@account/store/definitions";
import "vue-loading-overlay/dist/vue-loading.css";

@Component({
  name: "ProfileHome",
  components: {
    Loading
  }
})
export default class Home extends Vue {
  get profile() {
    return this.$store.getters.profile;
  }
  get isLoading() {
    return this.$store.getters.isLoading;
  }

  throwError() {
    throw new Error();
  }

  mounted() {
    this.$store.dispatch(FETCH_PROFILE);
  }
  update() {
    this.$store.dispatch(UPDATE_USER, this.profile);
  }
}
</script>
