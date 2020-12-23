import axios from 'axios';
import { Provider } from 'react-redux';
import { loginOnSuccess } from './reducerUtils';

const initialState = {
  loggedIn: false,
  email: '',
  _id: '',
}

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (
  email,
  password,
  successCb,
  errorCb
) => loginOnSuccess(
  'post',
  '/api/register',
  { email, password },
  successCb,
  errorCb
)

export const loginUser = (
  password,
  email,
  successCb,
  errorCb
) => loginOnSuccess(
  'post',
  '/api/login',
  { email, password },
  successCb,
  errorCb
) 

export default (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case LOGIN_USER:
      return {
        ...state,
        ...payload,
        loggedIn: true,
      }
    default: return state;
  }
}
