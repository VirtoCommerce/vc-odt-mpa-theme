import Vue from "vue";
import { ActionTree } from "vuex";
import { FETCH_PROFILE, SET_PROFILE, UPDATE_USER } from "@account/store/definitions";
import { State } from "@account/store/state";
import { ApiAccountClient, UserUpdateInfo } from '@common/api/api.client';

//actions
export const actions: ActionTree<State, State> = {
  async [FETCH_PROFILE](context) {
    try {
      context.commit(FETCH_PROFILE);
      const accountClient = new ApiAccountClient(Vue.axios.defaults.baseURL, Vue.axios);
      const user = await accountClient.getCurrentUser(Vue.$storeInfo.storeName, Vue.$storeInfo.currentLng);
      context.commit(SET_PROFILE, user);
      return user;
    } catch (e) {
      // #todo SET_ERROR cannot work in multiple states
      // context.commit(SET_ERROR, response.data.errors)
    }
  },
  async [UPDATE_USER](context , userUpdateInfo: UserUpdateInfo) {
    const accountClient = new ApiAccountClient(Vue.axios.defaults.baseURL, Vue.axios);
    await accountClient.updateAccount(userUpdateInfo, Vue.$storeInfo.storeName, Vue.$storeInfo.currentLng);
    context.dispatch(FETCH_PROFILE);
  }
};
