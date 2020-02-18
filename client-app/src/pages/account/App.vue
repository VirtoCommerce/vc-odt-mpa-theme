<template>
  <div class="account mb-3 mt-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/"
                     tag="a"
                     active-class="border-bottom-0 border-primary"
                     class="nav-link"
                     exact>
          {{ $t('account.menu_titles.home') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="orders"
                     active-class="border-bottom-0 border-primary"
                     tag="a"
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
}
</script>
