import axios from 'axios';
import { GET_PACKAGES } from './types';

export function retrievePackages(packages) {
  return {
    type: GET_PACKAGE,
    packages
  };
}

export function postPackageData(data) {//data) {
  return dispatch => {
    return axios.post('/api/package') //, data)
    .then(res => {
      console.log("in the postPackageData function");
      console.log("res", res)
      // console.log("JSON.Parse(res)", JSON.parse(res));
      const packageArray = res.request.response;
      console.log("packageArray", packageArray);
      dispatch(retrievePackages(packageArray));
      // return packageArray;
      // dispatch({ type: 'packages', payload: })
      // res.data.forEach(p => dispatch(setPackage(p)));
    })
  }
}