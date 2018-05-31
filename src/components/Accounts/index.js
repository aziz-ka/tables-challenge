import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import _isEmpty from 'lodash/isEmpty';
import _find from 'lodash/find';

import {
  fetchAccounts,
  fetchAccountsDone
} from './actions';
import {
  getAccounts,
  getAccountTypeTotalValue,
  getHighlightedRow
} from './selectors';
import './styles.css';


export class Accounts extends Component {
  componentWillMount = () => {
    this.props.fetchAccounts();
  }

  renderAccountRow = ({ id, percentOfTotal, sum, type }) => {
    const account = _find(this.props.allAccounts, {id: this.props.highlightedRow}) || {};
    const isHighlighted = account.type === type;

    return (
      <tr className={isHighlighted ? 'highlighted-row' : ''} key={type}>
        <td>{type}</td>
        <td>{numeral(sum).format('$0,0[.]00')}</td>
        <td>{numeral(percentOfTotal).format('0[.]00%')}</td>
      </tr>
    );
  }

  render = () => {
    const { accountTypeTotalValues=[] } = this.props;

    if (_isEmpty(accountTypeTotalValues)) return null;

    return (
      <section className='accounts-section col-xs-12'>
        <h2>Accounts</h2>
        <table className='table table-hover text-left'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Sum</th>
              <th>Percent of Total</th>
            </tr>
          </thead>
          <tbody>
            {accountTypeTotalValues.map(this.renderAccountRow)}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  accountTypeTotalValues: getAccountTypeTotalValue(state),
  allAccounts: getAccounts(state),
  highlightedRow: getHighlightedRow(state)
});

const mapDispatchToProps = {
  fetchAccounts,
  fetchAccountsDone
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
