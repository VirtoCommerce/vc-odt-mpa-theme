import { GetterTree } from "vuex";
import { State } from "@account/store/state";

// getters
export const getters: GetterTree<State, State> = {
  profile: (state: State) => {
    return state.profile;
  },
  isLoading: (state: State) => {
    return state.isLoading;
  }
};
