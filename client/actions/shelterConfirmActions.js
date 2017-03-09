import axios from 'axios';
import { CONFIRM_DELIVERY } from './types';

export function postDeliveredAt(data) {//data) {
  return dispatch => {
    return axios.post('/api/shelter-form', data) //, data)
    .then(res => {
      const packageArray = res.request.response;
    })
  }
}

export function getShelterData(data) {
  return dispatch => {
    return axios.get('/api/shelterform', data)
  }
}

export function getShelterDetails(shelter) {
  return {
    type: GET_SHELTER_DETAILS,
    shelter
  };
}