import React from 'react';
import { connect } from 'react-redux';


const Balance = (props) => {
  return(
    <div>
      <h2>Current Balance: </h2>
      <h3>{props.amount}</h3>
    </div>
  )
}

function mapState(state){
  return {
    amount: state.Bank
  }
}


export default connect(mapState)(Balance);