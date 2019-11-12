import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { ACCOUNT } from './types';
import { URL } from '../utils/URL';

export const register = ({ data, history }) => dispatch => {
  axios.post(`${URL.account}/rgister`, data)
    .then(({ data }) => {
      dispatch({ type: ACCOUNT.REGISTER, payload: data });
      history.push('/sign-in')
    })
    .catch(err => dispatch({ type: ACCOUNT.ERROR, payload: err.response.data }) )
}

export const sign_in = obj => dispatch => {
  axios.post(`${URL.account}/sign-in`, obj)
    .then(({ data: { token } }) => {
      // Save to LocalStorage
      localStorage.setItem('webbcel', token);
      // Set Auth Token
      set_auth_token(token);
      // Set User
      dispatch(set_current_user(token));
    })
    .catch(err => dispatch({ type: ACCOUNT.ERROR, payload: err.response.data }))
}

export const set_auth_token = token => {
  if (!token) return delete axios.defaults.headers.common['Authorization'];
  axios.defaults.headers.common['Authorization'] = token;
};

export const set_current_user = token => {
  return { type: ACCOUNT.SIGN_IN, payload: jwt_decode(token) };
};