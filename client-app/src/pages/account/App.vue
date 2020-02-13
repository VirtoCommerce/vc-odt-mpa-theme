<template>
  <ProfileHome></ProfileHome>
  <hr>
  <orders-list></orders-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProfileHome from "@account/views/Home.vue";
import OrdersList from "./views/Orders.vue";

@Component({
  name: "home",
  components: {
    ProfileHome,
    OrdersList
  }
})
export default class App extends Vue {}
</script>
