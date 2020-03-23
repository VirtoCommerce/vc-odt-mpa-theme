import ErrorInfo from 'pages/init/store/types';

// state type
export interface State {
  errors: ErrorInfo[];
}

// initial state
export const state: State = {
  errors: []
};
