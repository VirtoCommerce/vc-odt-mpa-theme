import _Vue from "vue";
import { isActive } from "plugins/features/featureManager";
import FeatureNames from "plugins/features/featureNames";

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function FeaturesPlugin<S>(Vue: typeof _Vue): void {

  Vue.prototype.$features = FeatureNames;

  Vue.$isActive = isActive;

  Vue.prototype.$isActive = isActive;
}
