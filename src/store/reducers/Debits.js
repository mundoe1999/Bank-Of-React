import axios from 'axios';
// ACTION TYPES

const GET_DEBIT = "GET_DEBIT";
const ADD_DEBIT = "ADD_DEBIT";

// ACTION CREATORS  

const getAllDebit = (allDebit) => {
  return{
    type: GET_DEBIT,
    payload: allDebit
  }
}

const addDebit = (debit) => {
  return{
    type: ADD_DEBIT,
    payload: debit
  }
}

// THUNK CREATORS
export const getAllDebitThunk = () => (dispatch) => {
  return axios
    .get('https://moj-api.herokuapp.com/debits')
    .then(res => res.data)
    .then(allDebit => dispatch(getAllDebit(allDebit)))
    .catch(err => console.log(err));
}

export const AddDebitThunk = (debit) => (dispatch) => {
  dispatch(addDebit(debit));
}

//REDUCER
export default(state = [], action) => {
  switch(action.type){
    case GET_DEBIT:
      return action.payload;
    case ADD_DEBIT:
        let newState = state;
        newState.push(action.payload)
        return newState;
    default:
      return state;
  }
}