import { GROCERY_SELECTED } from '../actions/types';

export default (state = null, { type, payload }) => {
    switch(type)
    {
      case GROCERY_SELECTED:
        return payload;
      default:
        return state;
    }
  }