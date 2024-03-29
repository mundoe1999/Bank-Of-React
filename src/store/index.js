import { combineReducers, applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Importing all reducers under an alias
import * as reducers from './reducers';

//Setting up middleware
const logger = createLogger({collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));

//Setting up store
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer,middleware);
export default store;