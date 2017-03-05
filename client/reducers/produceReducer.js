import { INCREMENT_PRODUCE } from '../actions/types';
import { DECREMENT_PRODUCE } from '../actions/types';

let initState = {
  produce: 0
};

export default (state = initState.produce, action) => {
  console.log('produce reducer hit');
  switch(action.type) {
    case INCREMENT_PRODUCE:
      return state + 1;
    case DECREMENT_PRODUCE:
      return state - 1;
    default:
      return state;
  }
}