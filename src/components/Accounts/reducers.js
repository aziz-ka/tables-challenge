import { ACTIONS } from './constants';


export function accountsReducer(state=null, { payload, type }) {
  switch (type) {
    case ACTIONS.GET_ACCOUNTS_DONE:
      return payload;

    default:
      return state;
  }
}

export function highlightedRowReducer(state=null, { payload, type }) {
  switch (type) {
    case ACTIONS.HIGHLIGHT_ROW:
      return payload;

    default:
      return state;
  }
}
