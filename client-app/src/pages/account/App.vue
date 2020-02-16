<template>
  <div>
    <ProfileHome></ProfileHome>
    <hr>
    <OrdersListPage></OrdersListPage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProfileHome from "@account/views/Home.vue";
import OrdersListPage from "./views/OrdersList.vue";

@Component({
  name: "home",
  components: {
    ProfileHome,
    OrdersListPage
  }
})
export default class App extends Vue {}
</script>
