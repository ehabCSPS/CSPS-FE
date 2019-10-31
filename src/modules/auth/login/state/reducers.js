const userState = {
  userId: 0,
  token: '',
  expiresIn: 0,
  loginSuccess: false,
  loginFailed: false,
};

const loginReducer = (state = userState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...action.data,
        loginSuccess: true,
        loginFailed: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        ...action.error,
        loginFailed: true,
        loginSuccess: false,
      };
    default:
      return state;
  }
};

export const loginReducers = {loginReducer};
