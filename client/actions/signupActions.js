import axios from 'axios';

import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
    .then(res => {
      return axios.post('/api/auth', {
        identifier: userData.email,
        password: userData.password
      });
    })
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    })
    .catch(err => {

    });
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}
