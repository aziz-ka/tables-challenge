import { ACTIONS } from './constants';


export function holdingsReducer(state=null, { payload, type }) {
  switch (type) {
    case ACTIONS.GET_HOLDINGS_DONE:
      return payload;

    default:
      return state;
  }
}
