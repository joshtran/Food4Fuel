import { INCREMENT_PRODUCE, DECREMENT_PRODUCE } from '../actions/types';

let initialState = {
  produce: 0
};

export default (state = initialState.produce, action) => {
  switch(action.type) {
    case INCREMENT_PRODUCE:
      return state + 1;
    case DECREMENT_PRODUCE:
      return state - 1;
    default:
      return state;
  }
}