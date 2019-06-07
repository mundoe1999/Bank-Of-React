import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Debits extends Component {
    
  constructor(props){
    super(props);

    this.state = {
        data: this.props.debitHistory || []
    }
      


    this.addDebit = this.addDebit.bind(this);
  }


  
  addDebit = () => {

    let newObject = {
      amount: 250,
      date: new Date().toString(),
      description: 'NEW DEBIT',
      id: 2
    };


    this.setState({
      data: [...this.state.data, newObject]
    })
    this.props.UpdateDebit(newObject);

  }

  render(){
    let staticElement = (
      <div>
        <h1>Debit Information</h1>
        <Link to="/">Home</Link>
      </div>
    );
    
    return(
      <div>
        {staticElement}
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <button onClick={this.addDebit}>Add Debit</button>
        {
          this.state.data.map((info) =>
            <div className="DebitEntry">
              <h3>{info["description"]}</h3>
              <ul className="des">
                <li>Amount: {info["amount"]}</li>
                <li>Date: {info["date"]}</li>
              </ul>
              <hr/>
            </div>
          )
        }
          </div>
      );
  }

}

export default Debits;