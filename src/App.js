import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {

      accountBalance: 0,
      debitAmount: 0,
      debitHistory: [],

      creditAmount: 0,
      creditHistory: [],

      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    }
    //Binding
    this.UpdateDebit = this.UpdateDebit.bind(this);
    this.UpdateCredit = this.UpdateCredit.bind(this);

    this.UpdateBalance = this.UpdateBalance.bind(this);
    this.getDebits = this.getDebits.bind(this);
    this.getCredits = this.getCredits.bind(this);
    this.calculateDebit = this.calculateDebit.bind(this);
    this.calculateCredit = this.calculateCredit.bind(this);
  }

  componentDidMount(){
    this.getDebits();
    this.getCredits();
  }


  //Getting initial Debit and Credit
  getDebits(){
    axios.get("https://moj-api.herokuapp.com/debits")
    .then(response => {
      let result = response.data;
      this.setState({debitHistory: result});

      this.calculateDebit();
    });
  }

  getCredits(){
    axios.get("https://moj-api.herokuapp.com/credits")
    .then(response => {
      let result = response.data;
      this.setState({creditHistory: result});

      this.calculateCredit();
    });
  }

  //Calculating Amounts
  calculateDebit = () => {
    let total = 0;
    this.state.debitHistory.forEach(element => {
      total += element["amount"];
    });

    this.setState({
      debitAmount: total
    });
    this.UpdateBalance();
  }

  calculateCredit = () => {
    let total = 0;
    this.state.creditHistory.forEach(element => {
      total += element["amount"];
    });

    this.setState({
      creditAmount: total
    });
    this.UpdateBalance();
  }

  //Updating with new given values
  UpdateBalance = () =>{
    this.setState({
      accountBalance: (this.state.creditAmount - this.state.debitAmount).toFixed(2)
    });
    console.log(this.state.accountBalance);
  }

  UpdateDebit = (obj) => {
    this.setState({
      debitAmount: this.state.debitAmount+obj['amount'],
      debitHistory: [...this.state.debitHistory, obj] 
    });
    console.log(this.state.debitAmount);
    this.UpdateBalance();
  }

  UpdateCredit = (obj) => {
    this.setState({
      creditAmount: this.state.creditAmount+obj['amount'],
      creditHistory: [...this.state.creditHistory, obj] 
    });
    console.log(this.state.creditAmount);
    this.UpdateBalance();
  }


  render() {
      const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
      const UserProfileComponent = () => (<UserProfile userInfo={this.state.currentUser}/>);
      const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} UpdateDebit={this.UpdateDebit.bind(this)} debitHistory={this.state.debitHistory}/>);
      const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} UpdateCredit={this.UpdateCredit.bind(this)} creditHistory={this.state.creditHistory}/>);
  
      return (
          <Router>
            <div>
              <Route exact path='/' render={HomeComponent}/>
              <Route exact path='/userProfile' render={UserProfileComponent} />
              <Route exact path='/Debits' render={DebitsComponent} />
              <Route exact path='/Credits' render={CreditsComponent} />
            </div>
          </Router>
      );

  } //End Render
}

export default App;