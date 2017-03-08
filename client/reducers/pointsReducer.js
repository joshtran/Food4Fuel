import { REDEEM_POINTS } from '../actions/types';

let initialState = {
  points: 0
};

export default (state = initialState.points, action) => {
  switch(action.type) {
    case REDEEM_POINTS:
      return state + action.payload;
    default:
      return state;
  }
}