import { INCREMENT_BAKED_GOODS, DECREMENT_BAKED_GOODS } from '../actions/types';

let initialState = {
  baked_goods: 0
};

export default (state = initialState.baked_goods, action) => {
  switch(action.type) {
    case INCREMENT_BAKED_GOODS:
      return state + 1;
    case DECREMENT_BAKED_GOODS:
      return state - 1
    default:
      return state;
  }
}