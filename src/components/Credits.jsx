import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Credits extends Component {
    
  constructor(props){
    super(props);

    this.state = {
        data: this.props.creditHistory || []
    }
      

    this.addCredit = this.addCredit.bind(this);
  }




  
  addCredit = () => {

    let newObject = {
      amount: 250,
      date: new Date().toString(),
      description: 'NEW Credit',
      id: 2
    };


    this.setState({
      data: [...this.state.data, newObject]
    })
    this.props.UpdateCredit(newObject);

  }

  render(){
    let staticElement = (
      <div>
        <h1>Credit Information</h1>
        <Link to="/">Home</Link>
      </div>
    );
    
    return(
      <div>
        {staticElement}
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <button onClick={this.addCredit}>Add Credit</button>
        {
          this.state.data.map((info) =>
            <div className="CreditEntry">
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

export default Credits;