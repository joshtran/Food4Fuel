import { INCREMENT_DAIRY } from '../actions/types';
import { DECREMENT_DAIRY } from '../actions/types';

let initState = {
  dairy: 0
};

export default (state = initState.dairy, action) => {
  switch(action.type) {
    case INCREMENT_DAIRY:
      return state + 1;
    case DECREMENT_DAIRY:
      return state - 1
    default:
      return state;
  }
}