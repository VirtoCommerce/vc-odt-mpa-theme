import _Vue from "vue";
import { Store } from "vuex";
import { VNode } from "vue/types/umd";
import Features from "@common/features";
import StorefrontPermissions from "@common/permissions";
import json from '../../../../config/settings_data.json';
import { commentNode } from "./comment-node";
import profileModule from "./store-profile"

interface AuthorizationPluginOptions<S> {
  store: Store<S>;
  vuexNamespase?: string;
}

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function AuthorizationPlugin<S>(Vue: typeof _Vue, options?: AuthorizationPluginOptions<S>): void {

  // eslint-disable-next-line
  const store = options!.store;
  // eslint-disable-next-line
  const namespace = options!.vuexNamespase ? options!.vuexNamespase : "profileModule";
  store.registerModule(namespace, profileModule);

  /**
   * Inject all storefront permissions to Vue instance
   */
  Vue.prototype.$permissions = StorefrontPermissions;
  Vue.prototype.$features = Features;

  function checkUserPermissions(...permissions: string[]): boolean {
    const user = store.getters[`${namespace}/profile`];
    let result = false;
    if (!!user.permissions && user.permissions.length) {
      // eslint-disable-next-line
      result = permissions.every(p => user.permissions!.indexOf(p) > -1);
    }
    return result;
  }

  function checkIsActive(featureName: string): boolean {
    if (json == null) {
      throw new Error("Couldn't obtain settings file.");
    }

    if (json.features == null) {
      throw new Error("Features section not specified in the settings file.")
    }

    // eslint-disable-next-line
    const untypedJson = json as any;

    const features = untypedJson.features[featureName];
    if (features == null) {
      return false;
    }

    // todo: here should be hard if-else logics
    // todo: implement tests

    return features.isActive;
  }

  /**
   * Check permissions of user within Vue global object
   *  Component code:  Vue.$can('storefront:user:create', 'storefront:user:edit')
   */
  Vue.$can = checkUserPermissions;

  Vue.$isActive = checkIsActive;

  /**
   * Check permissions of user within Vue instance
   *  Component code:  this.$can(profile, 'storefront:user:create', 'storefront:user:edit')
   *  Template: <b-button v-if="$can('storefront:user:create', 'storefront:user:edit')">Add user</b-button>
   */
  Vue.prototype.$can = checkUserPermissions;

  Vue.prototype.$isActive = checkIsActive;

  /**
   * Directive for hide/disable html element.
   * Usage: <a v-can.disable="storefront:orders:view">orders</a>
   * modifiers: hide - hide element; disable - disable element.
   * default behavior is "Hide"
   */
  Vue.directive('can', (el, binding, vnode: VNode) => {
    const behavior = binding.modifiers.disable ? 'disable' : 'hide'
    let permissions = binding.value;
    if (!(permissions instanceof Array)) {
      permissions = [permissions];
    }
    // const profile = binding.value.user;
    const authResult = Vue.$can(...(permissions as Array<string>));
    if (!authResult) {
      if (behavior === 'hide') {
        commentNode(el, vnode)
      } else if (behavior === 'disable') {
        const inputEl = el as HTMLInputElement;
        if (inputEl) {
          inputEl.disabled = true
        }
      }
    }
  });

}




