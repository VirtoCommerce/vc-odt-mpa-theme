import { User } from '@common/api/api-clients';

export default class AuthorizationService{
  static checkUserPermissions(user: User, ...permissions: string[]): boolean {
    let result = false;
    if ( !!user.permissions && user.permissions.length ){
      result = permissions.every(p=> user.permissions!.indexOf(p) > -1 );
    }
    return result;
  }
}
