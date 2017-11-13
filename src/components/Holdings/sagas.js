import axios from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';

import { ACTIONS, APIS } from './constants';
import { fetchHoldingsDone } from './actions';


function* fetchHoldings({ payload }) {
  try {
    const holdings = yield call(axios.get, APIS.GET_HOLDINGS);
    yield put(fetchHoldingsDone(holdings.data.Positions));
  }
  catch (error) {
    console.error('something went wrong', error);
  }
}


export const holdingsSagas = [
  fork(takeEvery, ACTIONS.GET_HOLDINGS, fetchHoldings)
];
