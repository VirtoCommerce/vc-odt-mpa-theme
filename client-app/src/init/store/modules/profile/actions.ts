import { ActionTree } from "vuex";
import { UserUpdateInfo } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { accountClient } from '@common/services/api-clients.service';
//import { RootState } from "../../../../pages/account/store/types";
import { State as RootState } from "@init-app/store/state";
import { FETCH_PROFILE, SET_PROFILE, UPDATE_USER  } from "./definitions";
import { ProfileState } from "./types";

//actions
export const actions: ActionTree<ProfileState, RootState> = {
  async [FETCH_PROFILE](context) {
    try {
      context.commit(FETCH_PROFILE);
      const user = await accountClient.getCurrentUser(storeName, locale);
      context.commit(SET_PROFILE, user);
      return user;
    } catch (e) {
      // #todo SET_ERROR cannot work in multiple states
      // context.commit(SET_ERROR, response.data.errors)
    }
  },
  async [UPDATE_USER](context , userUpdateInfo: UserUpdateInfo) {
    await accountClient.updateAccount(userUpdateInfo, storeName, locale);
    context.dispatch(FETCH_PROFILE);
  }
};
