// change validation to use email checker then add our domain checker
import {validate} from 'email-validator';
export const validateEmail = email => {
  return validate(email);
};
export const validatePassword = password => {
  if (password === undefined || password.length < 8) {
    return false;
  }
  return true;
};
