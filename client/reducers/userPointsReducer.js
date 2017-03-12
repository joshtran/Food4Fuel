import { SET_USER_POINTS } from '../actions/types';

let initialState = {
  total: 0
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_USER_POINTS:
      let userPoints = {total: payload};
      return Object.assign({}, state, userPoints);
    default:
      return state;
  }
}