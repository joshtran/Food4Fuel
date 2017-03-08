import axios from 'axios';
import { GET_PACKAGES } from './types';

export function retrievePackages(packages) {
  return {
    type: GET_PACKAGE,
    packages
  };
}

export function postPackageData(data) {//data) {
  console.log("reaching package action");
  return dispatch => {
    return axios.post('/api/package', data) //, data)
    .then(res => {
      const packageArray = res.request.response;
      // dispatch(retrievePackages(packageArray));
      // return packageArray;
      // dispatch({ type: 'packages', payload: })
      // res.data.forEach(p => dispatch(setPackage(p)));
      axios.get('/api/notifications');
    })
  }
}


