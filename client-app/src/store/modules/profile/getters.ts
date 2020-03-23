import { GetterTree } from "vuex";
import { RootState } from "store/types";
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
