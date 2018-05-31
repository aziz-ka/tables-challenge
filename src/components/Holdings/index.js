import React, { Component } from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import {
  fetchHoldings,
  fetchHoldingsDone,
  handleHover
} from './actions';
import { getHoldings } from './selectors';
import './styles.css';


export class Holdings extends Component {
  componentWillMount = () => {
    this.props.fetchHoldings();
  }

  handleHover = (account_id, e) => {
    this.props.handleHover(account_id);
  }

  renderHoldingRow = ({ account_id, id, price, quantity, ticker, ticker_name }) => (
    <tr key={id} onMouseEnter={this.handleHover.bind(this, account_id)}>
      <td>{account_id}</td>
      <td>{ticker_name}</td>
      <td>{ticker}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  )

  render = () => {
    const { holdings=[] } = this.props;

    if (_isEmpty(holdings)) return null;

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
  fetchHoldingsDone,
  handleHover
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holdings);
