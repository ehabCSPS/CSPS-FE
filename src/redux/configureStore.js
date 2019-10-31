import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

const middlewares = [thunk];
const initialState = {};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
