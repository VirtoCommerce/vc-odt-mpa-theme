import { GetterTree } from "vuex";
import { State } from "pages/init/store/state";
import { ReactiveErrorInfo } from 'pages/init/store/types';
import { interval } from 'rxjs';
import { map } from "rxjs/operators";
import { RootState } from "store/types";

// getters
export const getters: GetterTree<State, RootState> = {
  errors: (state: State): ReactiveErrorInfo[] => {
    return state.errors.map(error => ({
      ...error,
      timestamp$: interval(1000).pipe(map(() => error.timestamp))
    }));
  },
};
