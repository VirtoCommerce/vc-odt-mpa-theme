import AccountService from "@common/account.service";
import { ActionTree } from "vuex";
import { FETCH_PROFILE, SET_PROFILE, UPDATE_USER } from "@account/store/definitions";
import { State } from "@account/store/state";

//actions
export const actions: ActionTree<State, State> = {
  async [FETCH_PROFILE](context) {
    try {
      context.commit(FETCH_PROFILE);
      const { data } = await AccountService.getUserAccount();
      context.commit(SET_PROFILE, data);
      return data;
    } catch (e) {
      // #todo SET_ERROR cannot work in multiple states
      // context.commit(SET_ERROR, response.data.errors)
    }
  },
  [UPDATE_USER]() {
    //todo
  }
};
