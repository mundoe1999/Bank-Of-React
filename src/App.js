import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance: 0,
      credits: 0,
      debits: 0,
      debits_json: NaN,
      credit_json: NaN,
      isLoaded: 0,

      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    }

    this.calculateSum = this.calculateSum.bind(this);
    this.updateDebit = this.updateDebit.bind(this);
    this.addDebit = this.addDebit.bind(this);

  }


  addDebit(newValue){
    this.setState({
      debits_json: this.state.debits_json.push(newValue)
    },
    
    this.updateDebit
    );

  }

  updateDebit(){
    this.setState({
      debits: this.calculateSum(this.state.debits_json)
    },
    this.updateAccountBalance
    );
  }

  updateCredit(){
    this.setState({
      debits: this.calculateSum(this.state.credits_json)
    });
  }

  updateAccountBalance(){
    this.setState({
      accountBalance: (this.state.credits - this.state.debits).toFixed(2)
    });
  }

  //Calculate sum amount from given Credit / Debit
  calculateSum = array => {
    let sum = 0;
    array.forEach(element => {
      sum += element["amount"];
    });
    console.log(sum);
    return sum;
  }

  componentDidMount(){

    //Fetching Credit informaiton
    fetch('https://moj-api.herokuapp.com/credits')
    .then(response => response.json())
    .then(myJson => (this.setState({credits: this.calculateSum(myJson), credit_json: myJson}), this.updateAccountBalance()));

    //Fetching Debit information
    fetch('https://moj-api.herokuapp.com/debits')
    .then(response => response.json())
    .then(myJson => (this.setState({debits: this.calculateSum(myJson), debits_json: myJson}), this.updateAccountBalance()));


  }

  render() {
  

      const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} creditInfo={this.state.credits} debitInfo={this.state.debits}/>);
      const UserProfileComponent = () =>
        (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
  
      const DebitsComponent = () => (<Debits debitInfo={this.state.debits_json || []  } accountBalance={this.state.accountBalance} updateJson={this.addDebit}/>);
  
      return (
          <Router>
            <div>
              <Route exact path='/' render={HomeComponent}/>
              <Route exact path='/userProfile' render={UserProfileComponent} />
              <Route exact path='/Debits' render={DebitsComponent} />
            </div>
          </Router>
      );

  } //End Render
}

export default App;