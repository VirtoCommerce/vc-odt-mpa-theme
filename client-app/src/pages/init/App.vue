<template>
  <div>
    <Error v-for="(error, index) in errors"
           :id="'error-'+index"
           :key="error.timestamp"
           :index="index"
           :error-info="error"
           @close="removeError(error)">
    </Error>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Error from "@components/error.vue";
import { REMOVE_ERROR } from "@init-app/store/definitions";
import { ReactiveErrorInfo } from "@init-app/store/types";

@Component({
  name: "InitApp",
  components: {
    Error
  }
})
export default class App extends Vue {

  get errors() {
    return this.$store.getters.errors;
  }

  removeError(error: ReactiveErrorInfo) {
    this.$store.dispatch(REMOVE_ERROR, error);
  }
}
</script>
