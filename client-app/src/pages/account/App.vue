<template>
  <ProfileHome></ProfileHome>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProfileHome from "@account/views/Home.vue";

@Component({
  name: "home",
  components: {
    ProfileHome
  }
})
export default class App extends Vue {}
</script>
