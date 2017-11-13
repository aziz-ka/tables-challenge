import React, { Component } from 'react';
import { connect } from 'react-redux';
import _isNull from 'lodash/isNull';

import {
  fetchHoldings,
  fetchHoldingsDone
} from './actions';
import { getHoldings } from './selectors';
import './styles.css';


export class Holdings extends Component {
  componentWillMount = () => {
    this.props.fetchHoldings();
  }

  renderHoldingRow = ({ account_id, id, price, quantity, ticker, ticker_name }) => (
    <tr key={id}>
      <td>{account_id}</td>
      <td>{ticker_name}</td>
      <td>{ticker}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  )

  render = () => {
    const { holdings=[] } = this.props;

    if (_isNull(holdings)) return null;

    return (
      <section className='holdings-section col-xs-12'>
        <h2>Holdings</h2>
        <table className='table table-hover text-left'>
          <thead>
            <tr>
              <th>Account Id</th>
              <th>Ticker Name</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map(this.renderHoldingRow)}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  holdings: getHoldings(state)
});

const mapDispatchToProps = {
  fetchHoldings,
  fetchHoldingsDone
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holdings);
