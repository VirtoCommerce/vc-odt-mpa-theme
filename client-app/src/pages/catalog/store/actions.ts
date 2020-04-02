//root actions
import { ActionTree } from 'vuex'
import { RootState } from '@catalog/store/types'

export const actions: ActionTree<RootState, RootState> = {
  increment(context) {
    context.commit("increment");
  }
}
export default actions;
