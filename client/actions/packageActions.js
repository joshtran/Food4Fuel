import axios from 'axios';
import { GET_PACKAGES } from './types';
import { ADD_POINTS } from './types';
import { updateCurrentPoints } from './pointsActions';

export function retrievePackages(packages) {
  return {
    type: GET_PACKAGE,
    packages
  };
}

export function addPoints (userId, newPointTotal) {
  let update = {
    user: userId,
    value: newPointTotal,
    requestType: "add"
  };
  return dispatch => {
    return axios.put('/api/points', update)
    .then(res => {
      dispatch(updateCurrentPoints(res.data.response));
    });
  }
}

export function postPackageData(data) {
  return dispatch => {
    return axios.post('/api/package', data)
    .then(res => {
      const packageArray = res.request.response;
      // axios.get('/api/notifications');
    });
  }
}


