import {loginReducers} from './../modules/auth/login/state/reducers';
import {combineReducers} from 'redux';
const reducers = {
  ...loginReducers,
};
export const rootReducer = combineReducers({
  login: reducers['loginReducer'],
});
