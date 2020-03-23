import _Vue from "vue";
import { VNode } from 'vue/types/umd';
import StorefrontPermissions from '@common/permissions';
import AuthorizationService from '@common/services/authorization.service';
import { commentNode } from './comment-node';


// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function AuthorizationPlugin(Vue: typeof _Vue, options?: any): void {

  /**
   * Inject all storefront permissions to Vue instance
   */
  Vue.prototype.$permissions = StorefrontPermissions;

  /**
   * Check permissions of user in Vue instance
   *  Component code:  this.$can(profile, 'storefront:user:create', 'storefront:user:edit')
   *  Template: <b-button v-if="$can(profile, 'storefront:user:create', 'storefront:user:edit')">Add user</b-button>
   */
  Vue.prototype.$can = AuthorizationService.checkUserPermissions;

  /**
   * Directive for hide/disable html element.
   * Usage: <a v-can.disable="{user:user, "storefront:orders:view"}">orders</a>
   * modifiers: hide - hide element; disable - disable element.
   * default behavior is "Hide"
   */
  Vue.directive('can', (el, binding, vnode: VNode) => {
    const behavior = binding.modifiers.disable ? 'disable' : 'hide'
    let permissions = binding.value;
    if(!( permissions instanceof Array )) {
      permissions = [permissions];
    }
    // const profile = binding.value.user;
    const authResult = AuthorizationService.checkUserPermissions( ...(permissions as Array<string>));
    if (!authResult) {
      if (behavior === 'hide') {
        commentNode(el, vnode)
      } else if (behavior === 'disable') {
        const inputEl = el as HTMLInputElement;
        if(inputEl){
          inputEl.disabled = true
        }
      }
    }
  });

}




