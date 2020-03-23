import store from "store";
import { User } from '@common/api/api-clients';

export default class AuthorizationService{
  static checkUserPermissions( ...permissions: string[]): boolean {
    const user = store.getters["profileModule/profile"] as User;
    let result = false;
    if ( !!user.permissions && user.permissions.length ){
      result = permissions.every(p=> user.permissions!.indexOf(p) > -1 );
    }
    return result;
  }
}
