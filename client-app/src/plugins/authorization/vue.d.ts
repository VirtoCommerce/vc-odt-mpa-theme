import Vue from "vue"
import StorefrontPermissions from "@common/permissions";
import Services from "@common/services";

declare module 'vue/types/vue' {

  interface Vue {
    $permissions: StorefrontPermissions;
    $services: Services;
    $can: (...permissions: string[]) => boolean;
    $isActive: (serviceName: string) => boolean;
  }

  interface VueConstructor {
    $can: (...permissions: string[]) => boolean;
    $isActive: (serviceName: string) => boolean;
  }
}

