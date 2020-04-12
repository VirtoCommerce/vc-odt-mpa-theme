import Vue from "vue"
import FeatureNames from "plugins/features/featureNames";

declare module 'vue/types/vue' {

  interface Vue {
    $features: FeatureNames;
    $isActive: (featureName: string) => boolean;
  }

  interface VueConstructor {
    $isActive: (featureName: string) => boolean;
  }
}

