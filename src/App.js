//Basic Imports
import React, {Component} from 'react';
import {getAllDebitThunk, getAllCreditThunk, AddCreditThunk, UpdateBalanceThunk} from './store/thunks';
import { connect } from 'react-redux';

//Routing Import
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Page Imports
import HomePage from './pages/HomePage';
import DebitPage from './pages/DebitPage';
import CreditPage from './pages/CreditPage';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter : 0
    }
  }
  componentDidMount(){
    this.props.getCredit();
    this.props.getDebit();
    //this.props.updateBalance(2);
   
  }

  componentDidUpdate(prevProps){
    if(this.state.counter < 2 && (this.props.allCredit !== prevProps.allCredit || this.props.allDebit !== prevProps.allDebit)){
      this.props.updateBalance(this.props.allCredit, this.props.allDebit);
      this.setState({
        counter: this.state.counter+1
      })
    }
  }

  render(){
    const Home = () => (<HomePage/>)
    const Debits = () => (<DebitPage/>)
    const Credits = () => (<CreditPage/>)

    return (
      <Router>
      <div className="App">
        <Route exact path = '/' render={Home} />
        <Route exact path = '/debit' render={Debits} />
        <Route exact path = '/credit' render={Credits} />
      </div>
      </Router>

    );
  }


}

//Redux connections
function mapState(state){
  return {
    allDebit: state.Debits,
    allCredit: state.Credits,
    amount: state.Bank
  }
}

function mapDispatch(dispatch) {
  return {
    getDebit: () => dispatch(getAllDebitThunk()),
    getCredit: () => dispatch(getAllCreditThunk()),
    addCredit: (credit) => dispatch(AddCreditThunk(credit)),
    updateBalance: (creditJson,debitJson) => dispatch(UpdateBalanceThunk(creditJson,debitJson))
  }
}




export default connect(mapState,mapDispatch)(App);
