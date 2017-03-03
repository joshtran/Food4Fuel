import axios from 'axios';


export function sendNotification() {
  return dispatch => {
    return axios.get('/api/notifications');
  }
}
