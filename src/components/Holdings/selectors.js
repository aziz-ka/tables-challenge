import { createSelector } from 'reselect';


export const getHoldings = createSelector(
  state => state.data.holdings,
  holdings => holdings
);
