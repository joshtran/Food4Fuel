import { INCREMENT_BAKED_GOODS } from '../actions/types';
import { DECREMENT_BAKED_GOODS } from '../actions/types';

let initState = {
  baked_goods: 0
};

export default (state = initState.baked_goods, action) => {
  switch(action.type) {
    case INCREMENT_BAKED_GOODS:
      return state + 1;
    case DECREMENT_BAKED_GOODS:
      return state - 1
    default:
      return state;
  }
}