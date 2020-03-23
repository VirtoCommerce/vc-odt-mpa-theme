import { User } from '@common/api/api-clients';
import store from "@init-app/store";

export default class AuthorizationService{
  static checkUserPermissions( ...permissions: string[]): boolean {
    const user = store.getters["profileModule/profile"];
    console.log(user);
    let result = false;
    if ( !!user.permissions && user.permissions.length ){
      result = permissions.every(p=> user.permissions!.indexOf(p) > -1 );
    }
    return result;
  }
}
