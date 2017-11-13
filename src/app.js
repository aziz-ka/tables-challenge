import React, { Component } from 'react';

import Accounts from './components/Accounts';
import Holdings from './components/Holdings';


export default class App extends Component {
  render = () => (
    <div className='container-fluid'>
      <Holdings />
      <Accounts />
    </div>
  )
}
