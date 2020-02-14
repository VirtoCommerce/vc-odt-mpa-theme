<template>
  <div>
    <ProfileHome></ProfileHome>
    <hr>
    <OrdersList></OrdersList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProfileHome from "@account/views/Home.vue";
import OrdersList from "./views/OrdersList.vue";

@Component({
  name: "home",
  components: {
    ProfileHome,
    OrdersList
  }
})
export default class App extends Vue {}
</script>
