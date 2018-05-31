import { ACTIONS } from './constants';


export const fetchHoldings = payload => ({
  type: ACTIONS.GET_HOLDINGS,
  payload
});

export const fetchHoldingsDone = payload => ({
  type: ACTIONS.GET_HOLDINGS_DONE,
  payload
});

export const handleHover = payload => ({
  type: ACTIONS.HIGHLIGHT_ROW,
  payload
});
