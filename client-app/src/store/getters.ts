import { GetterTree } from 'vuex';
import { RootState } from 'store/types';

export const getters: GetterTree<RootState, RootState> = {
  counter: (state: RootState): number => {
    return state.counter;
  }
}

export default getters;
