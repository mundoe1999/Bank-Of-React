import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
    
class Home extends Component {
  render() {
    return (
        <div>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/Debits">Debits</Link>

          <AccountBalance accountBalance={this.props.accountBalance} creditInfo={this.props.creditInfo} debitInfo={this.props.debitInfo}/>
        </div>
    );
  }
}

export default Home;