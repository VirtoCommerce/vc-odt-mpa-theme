//root mutations

import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '@catalog/store/types'

export const mutations: MutationTree<RootState> = {
  increment(state) {
    state.counter++;
  }
}
export default mutations;
