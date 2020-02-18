import ErrorInfo from '@common/models/error-info.model';

// state type
export interface State {
  errors: ErrorInfo[];
}

// initial state
export const state: State = {
  errors: []
};
