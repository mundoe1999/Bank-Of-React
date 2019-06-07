// src/components/AccountBalance.jsx

import React, {Component} from 'react';

class AccountBalance extends Component {

  render() {
    return (
        <div>
          Total Balance: {this.props.accountBalance}
          <br/>

        </div>
    );
  }
}

export default AccountBalance;