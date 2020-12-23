import axios from 'axios';
import { LOGIN_USER } from './AuthReducer'


export const loginOnSuccess = (
  httpMethod,
  url,
  body,
  successCb,
  errorCb
) => {
  return (dispatch) => {
    return axios[httpMethod.toLowerCase()](url, body)
      .then(({ data: { email, _id } }) => {
        dispatch({
          type: LOGIN_USER,
          payload: {
            email,
            _id
          }
        })
        successCb(_id);
      })
      .catch(errorCb)
  }
}