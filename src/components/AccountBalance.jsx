// src/components/AccountBalance.jsx

import React, {Component} from 'react';

class AccountBalance extends Component {

  render() {
    return (
        <div>
          Balance: {(this.props.creditInfo - this.props.debitInfo).toFixed(2)}
          <br/>
          Credits: {this.props.creditInfo}
          <br/>
          Debits: {this.props.debitInfo}
        </div>
    );
  }
}

export default AccountBalance;