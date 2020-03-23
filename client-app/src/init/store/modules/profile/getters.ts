import { GetterTree } from "vuex";
//import { RootState } from "../../../../pages/account/store/types";
import { State as RootState } from "@init-app/store/state";
import { ProfileState } from "./types";

// getters
export const getters: GetterTree<ProfileState, RootState> = {
  profile: (state: ProfileState) => {
    return state.profile;
  },
  isLoading: (state: ProfileState): boolean => {
    return state.isLoading;
  }
};
