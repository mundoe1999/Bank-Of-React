
//ACTION TYPES

//Updating data Tables
const ADD_DEBIT_AMOUNT = "ADD_DEBIT_AMOUNT";
const ADD_CREDIT_AMOUNT = "ADD_CREDIT_AMOUNT";

const UPDATE_BALANCE = "UPDATE_BALANCE";

// ACTION CREATORS  

const addDebitAmount = (amount) => {
  return{
    type: ADD_DEBIT_AMOUNT,
    payload: amount
  }
}

const addCreditAmount = (amount) => {
  return{
    type: ADD_CREDIT_AMOUNT,
    payload: amount
  }
}

const updateBalance = (amount) => {
  return{
    type: UPDATE_BALANCE,
    payload: amount
  }
}

//THUNK CREATORS
export const AddDebitAmountThunk = (amount) => (dispatch) => {
  dispatch(addDebitAmount(amount));
}

export const AddCreditAmountThunk = (amount) => (dispatch) => {
  dispatch(addCreditAmount(amount));
}

export const UpdateBalanceThunk = (creditJson = [], debitJson = []) => (dispatch) => {
  let sum = 0;

  //Calculating the total Sum
  creditJson.forEach(element => {
    sum += element['amount'];
  });
  debitJson.forEach(element => {
    sum -= element['amount'];
  });
  sum = sum.toFixed(2);
  dispatch(updateBalance(sum));
}


export default(state = 0, action) => {
  switch(action.type){
    case ADD_DEBIT_AMOUNT:
      return parseFloat((state - action.payload).toFixed(2));
    case ADD_CREDIT_AMOUNT:
      return parseFloat((state + action.payload).toFixed(2));
    case UPDATE_BALANCE:
      return parseFloat(action.payload);
    default:
      return state;
  }
}