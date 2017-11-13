import { all } from 'redux-saga/effects';

import { accountsSagas } from './components/Accounts/sagas';
import { holdingsSagas } from './components/Holdings/sagas';


export default function* sagas() {
  yield all([
    ...accountsSagas,
    ...holdingsSagas
  ]);
}
