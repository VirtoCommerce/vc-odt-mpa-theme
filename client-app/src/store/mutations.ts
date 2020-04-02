//root mutations

import { MutationTree } from 'vuex'
import { RootState } from 'store/types'

export const mutations: MutationTree<RootState> = {
  increment(state) {
    state.counter++;
  }
}
export default mutations;
