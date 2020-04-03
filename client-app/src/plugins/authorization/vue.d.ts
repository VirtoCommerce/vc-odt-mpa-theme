import Vue from "vue"
import FeatureNames from "plugins/features/featureNames";
import StorefrontPermissions from "@common/permissions";

declare module 'vue/types/vue' {

  interface Vue {
    $permissions: StorefrontPermissions;
    $features: FeatureNames;
    $can: (...permissions: string[]) => boolean;
    $isActive: (featureName: string) => boolean;
  }

  interface VueConstructor {
    $can: (...permissions: string[]) => boolean;
    $isActive: (featureName: string) => boolean;
  }
}

