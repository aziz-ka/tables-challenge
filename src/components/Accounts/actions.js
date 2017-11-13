import { ACTIONS } from './constants';


export const fetchAccounts = payload => ({
  type: ACTIONS.GET_ACCOUNTS,
  payload
});

export const fetchAccountsDone = payload => ({
  type: ACTIONS.GET_ACCOUNTS_DONE,
  payload
});
