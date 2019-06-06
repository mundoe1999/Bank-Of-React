import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
    
class Debits extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: false
    }
  }
  //{  this.props.updateJson(["something", "123"]);}

  render() {

    let StaticElements = (
      <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/userProfile">User Profile</Link>
        <h1>Debit Information</h1>
        <div>Current Balance: {this.props.accountBalance}</div>
      </div>
    );

    //All elements in JSON 
    let displayInfo =
      this.props.debitInfo.map( element => {
        return(
          <div className="DataInformation">
            <strong>{element["description"]}</strong>
            <br/>
            Amount: {element["amount"]}
            <br/>
            Date: {element["date"]}
            <hr/>
          </div>
        )});
    

    return (
        <div>
          
          {StaticElements}
          <button>Add Debit</button>
          {displayInfo}
          
        </div>
    );
  }
}

export default Debits;