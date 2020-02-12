import { ActionTree } from "vuex";
import { FETCH_PROFILE, SET_PROFILE, UPDATE_USER } from "@account/store/definitions";
import { State } from "@account/store/state";
import { UserUpdateInfo } from '@common/api/api-clients';
import { storeInfo } from '@common/constants';
import {accountClient} from '@common/services/api-clients.service';

//actions
export const actions: ActionTree<State, State> = {
  async [FETCH_PROFILE](context) {
    try {
      context.commit(FETCH_PROFILE);
      const user = await accountClient.getCurrentUser(storeInfo.storeName, storeInfo.locale);
      context.commit(SET_PROFILE, user);
      return user;
    } catch (e) {
      // #todo SET_ERROR cannot work in multiple states
      // context.commit(SET_ERROR, response.data.errors)
    }
  },
  async [UPDATE_USER](context , userUpdateInfo: UserUpdateInfo) {
    await accountClient.updateAccount(userUpdateInfo, storeInfo.storeName, storeInfo.locale);
    context.dispatch(FETCH_PROFILE);
  }
};
