import Vue from "vue"
import StorefrontPermissions from "@common/permissions";
import FeatureNames from "plugins/features/featureNames";

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

