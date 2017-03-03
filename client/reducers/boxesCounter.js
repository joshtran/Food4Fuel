import { INCREMENT_BOX } from '../actions/types';
import { DECREMENT_BOX } from '../actions/types';
import { SELECT_ALL_BOX } from '../actions/types';

export default (state = 0, action = {}) => {
  switch(action.type) {
    case INCREMENT_BOX:
      return state + 1;
    case DECREMENT_BOX:
      return state - 1;
    default:
      return state;
  }
}