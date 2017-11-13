import axios from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';

import { ACTIONS, APIS } from './constants';
import { fetchAccountsDone } from './actions';


function* fetchAccounts({ payload }) {
  try {
    const accounts = yield call(axios.get, APIS.GET_ACCOUNTS);
    yield put(fetchAccountsDone(accounts.data.Accounts));
  }
  catch (error) {
    console.error('something went wrong', error);
  }
}


export const accountsSagas = [
  fork(takeEvery, ACTIONS.GET_ACCOUNTS, fetchAccounts)
];
