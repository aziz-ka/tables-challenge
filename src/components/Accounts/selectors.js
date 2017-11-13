import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _reduce from 'lodash/reduce';
import _sumBy from 'lodash/sumBy';

import { getHoldings } from '../Holdings/selectors';


export const getAccounts = createSelector(
  state => state.data.accounts,
  accounts => accounts
);

export const getAccountSums = createSelector(
  getAccounts,
  getHoldings,
  (accounts, holdings) => _map(accounts, account => {
    const accountHoldings = _filter(holdings, {account_id: account.id});
    const sum = _sumBy(accountHoldings, 'price');

    return {
      ...account,
      sum
    };
  })
);

export const getAccountSumsByType = createSelector(
  getAccountSums,
  accountSums => _reduce(accountSums, (result, { sum, type }) => {
    result[type] = {
      sum: _get(result, `${type}.sum`, 0) + sum
    };

    return result;
  }, {})
);

export const getAccountTypeTotalValue = createSelector(
  getAccountSumsByType,
  getHoldings,
  (accountSumsByType, holdings) => _map(accountSumsByType, ({ sum }, type) => {
    const totalSum = _sumBy(holdings, 'price');
    const percentOfTotal = sum / totalSum;

    return {
      percentOfTotal,
      sum,
      type
    };
  })
);
