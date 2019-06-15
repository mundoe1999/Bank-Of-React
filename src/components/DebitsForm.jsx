import React, {Component} from 'react';
import {connect} from 'react-redux';

import {AddDebitThunk, AddDebitAmountThunk} from '../store/thunks';

class DebitsForm extends Component {
  constructor(){
    super();
    this.state = {
      amount: 0,
      description: ''
    }

    this.descChange = this.descChange.bind(this);
    this.amtChange = this.amtChange .bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  descChange(event){
    this.setState({
      description: event.target.value
    });
  }

  amtChange(event){
    this.setState({
      amount: event.target.value
    });
  }

  handleSubmit(event){

    let t_amount = parseFloat(this.state.amount);

    let object = {
      amount: t_amount,
      description: this.state.description,
      id: "ehvierkbir",
      date: "06-23-2019"
    }

    this.props.addDebit(object);
    this.props.addDebitAmount(t_amount);

    this.props.toggleForm();
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Description:
          <input type='text' value={this.state.description} onChange={this.descChange} name="description" required />
          <br/>
          Value:
          <input type='number' step='0.01' value={this.state.amount} onChange={this.amtChange} name="amount" required />
          <input type='submit' value='Submit' />
        </form>
        <button onClick={this.props.toggleForm}>Cancel</button>
      </div>

    )

  }

}

function mapState(state,ownprops){
  return {
    toggleForm: ownprops.toggleForm
  }
}

function mapDispatch(dispatch) {
  return {
    addDebit: (debit) => dispatch(AddDebitThunk(debit)),
    addDebitAmount: (amount) => dispatch(AddDebitAmountThunk(amount))
  }
}


export default connect(mapState,mapDispatch)(DebitsForm);