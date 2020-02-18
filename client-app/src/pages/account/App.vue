<template>
  <div class="account mb-3 mt-3">
    <b-button variant="danger"
              class="my-3"
              @click="throwError()">
      Throw error from vue.js
    </b-button>

    <ul class="nav bg-primary">
      <li class="nav-item">
        <router-link to="/"
                     tag="a"
                     active-class="bg-secondary"
                     class="nav-link"
                     exact>
          {{ $t('account.menu_titles.home') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="orders"
                     tag="a"
                     active-class="bg-secondary"
                     class="nav-link">
          {{ $t('account.menu_titles.orders') }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

@Component({
  name: "home"
})
export default class App extends Vue {
  throwError() {
    throw new Error();
  }
}
</script>
