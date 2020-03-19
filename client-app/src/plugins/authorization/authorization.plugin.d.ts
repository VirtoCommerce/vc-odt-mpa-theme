import Vue from 'vue'
import { User } from '@common/api/api-clients';
import StorefrontPermissions from '@common/permissions';

declare module 'vue/types/vue' {
  interface Vue {
    $permissions: StorefrontPermissions;
    $can: (user: User, ...permissions: string[]) => boolean;
  }
}


