<template>
  <div class="account mb-3 mt-3">
    <loading :active.sync="isLoading"></loading>

    <ul class="nav bg-primary">
      <li class="nav-item">
        <router-link to="/"
                     tag="a"
                     active-class="bg-secondary"
                     class="nav-link"
                     exact>
          User Details
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="orders"
                     tag="a"
                     active-class="bg-secondary"
                     class="nav-link">
          Orders
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
  name: "home",
  components: {
    Loading
  }
})
export default class App extends Vue {
  get isLoading() {
    return this.$store.getters.isLoading;
  }
}
</script>
