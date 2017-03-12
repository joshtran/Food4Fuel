import axios from 'axios';
import { SET_USER_POINTS } from './types';


export function updateCurrentPoints(user) {
  return {
    type: SET_USER_POINTS,
    payload: user.reward_points
  }
}

export function currentPoints (userId, newPointTotal) {
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