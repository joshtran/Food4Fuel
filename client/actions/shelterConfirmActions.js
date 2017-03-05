import axios from 'axios';
import { CONFIRM_DELIVERY } from './types';

export function postDeliveredAt(data) {//data) {
  return dispatch => {
    return axios.post('/api/shelter-form', data) //, data)
    .then(res => {
      // console.log("in the postPackageData function");
      // console.log('data', data)
      // console.log("res", res)
      // console.log("JSON.Parse(res)", JSON.parse(res));
      const packageArray = res.request.response;
      // console.log("packageArray", packageArray);
      // dispatch(retrievePackages(packageArray));
      // return packageArray;
      // dispatch({ type: 'packages', payload: })
      // res.data.forEach(p => dispatch(setPackage(p)));
    })
  }
}