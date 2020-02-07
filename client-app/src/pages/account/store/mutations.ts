import { FETCH_PROFILE, SET_PROFILE } from "@account/store/definitions";
import { MutationTree } from "vuex";
import { State } from "@account/store/state";

//mutations
export const mutations: MutationTree<State> = {
  // [SET_ERROR] (state, error) {
  //   state.errors = error
  // },
  [SET_PROFILE](state, profile) {
    state.profile = profile;
    state.loaded = true;
    state.isLoading = false;
    state.errors = {};
  },
  [FETCH_PROFILE](state) {
    state.isLoading = true;
    state.loaded = false;
  }
};
