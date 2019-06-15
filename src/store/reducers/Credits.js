import axios from 'axios';

// ACTION TYPES

const GET_CREDIT = "GET_CREDIT";
const ADD_CREDIT = "ADD_CREDIT";

// ACTION CREATORS  

const getAllCredit = (allCredit) => {
  return{
    type: GET_CREDIT,
    payload: allCredit
  }
}

const addCredit = (credit) => {
  return{
    type: ADD_CREDIT,
    payload: credit
  }
}

// THUNK CREATORS


export const getAllCreditThunk = () => (dispatch) => {
  return axios
    .get('https://moj-api.herokuapp.com/credits')
    .then(res => res.data)
    .then(allCredit => dispatch(getAllCredit(allCredit)))
    .catch(err => console.log(err));
}

export const AddCreditThunk = (credit) => (dispatch) => {
  dispatch(addCredit(credit));
}


//REDUCER
export default(state = [], action) => {
  switch(action.type){
    case GET_CREDIT:
      return action.payload;
    case ADD_CREDIT:
      let newState = state;
      newState.push(action.payload)
      return newState;
    default:
      return state;
  }
}