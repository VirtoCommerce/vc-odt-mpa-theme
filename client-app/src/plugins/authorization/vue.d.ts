import Vue from "vue"
import StorefrontPermissions from "@common/permissions";


declare module 'vue/types/vue' {

  interface Vue {
    $permissions: StorefrontPermissions;
    $can: (...permissions: string[]) => boolean;
  }

  interface VueConstructor {
    $can: (...permissions: string[]) => boolean;
  }
}

