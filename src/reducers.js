import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { accountsReducer, highlightedRowReducer } from './components/Accounts/reducers';
import { holdingsReducer } from './components/Holdings/reducers';


export default combineReducers({
  routing: routerReducer,

  data: combineReducers({
    accounts: accountsReducer,
    holdings: holdingsReducer
  }),

  ui: combineReducers({
    highlightedRow: highlightedRowReducer
  })
});
