import Vue from "vue"
import StorefrontPermissions from "@common/permissions";
import Features from "@common/features";

declare module 'vue/types/vue' {

  interface Vue {
    $permissions: StorefrontPermissions;
    $features: Features;
    $can: (...permissions: string[]) => boolean;
    $isActive: (serviceName: string) => boolean;
  }

  interface VueConstructor {
    $can: (...permissions: string[]) => boolean;
    $isActive: (serviceName: string) => boolean;
  }
}

