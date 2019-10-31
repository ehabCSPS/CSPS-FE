import axios from 'axios';

import {API_URL} from './../../../../global/API_URL';
export const login = user => {
  return dispatch => {
    axios
      .post(API_URL + '/Account/Token', {username: user.email, ...user})
      .then(response => {
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        dispatch(loginFailed(error));
      });
  };
};

const loginSuccess = data => {
  return {
    type: 'LOGIN_SUCCESS',
    data,
  };
};
const loginFailed = error => {
  return {
    type: 'LOGIN_FAILED',
    error,
  };
};
