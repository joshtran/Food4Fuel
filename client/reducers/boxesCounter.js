import { INCREMENT_PRODUCE } from '../actions/types';
import { DECREMENT_PRODUCE } from '../actions/types';
import { INCREMENT_DAIRY } from '../actions/types';
import { DECREMENT_DAIRY } from '../actions/types';
import { INCREMENT_BAKED_GOODS } from '../actions/types';
import { DECREMENT_BAKED_GOODS } from '../actions/types';


export default (state = {produce: 0, dairy: 0, baked_goods: 0}, action) => {
  switch(action.type) {
    case INCREMENT_PRODUCE:
      return state.produce + 1;
    case DECREMENT_PRODUCE:
      return state.produce - 1;
    case INCREMENT_DAIRY:
      return state.dairy + 1;
    case DECREMENT_DAIRY:
      return state.dairy - 1
    case INCREMENT_BAKED_GOODS:
      return state.baked_goods + 1;
    case DECREMENT_BAKED_GOODS:
      return state.baked_goods - 1
    default:
      return state;
  }
}