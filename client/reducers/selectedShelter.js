import { SHELTER_SELECTED } from '../actions/types';

export default (state = null, { type, payload }) => {
    switch(type)
    {
      case SHELTER_SELECTED:
        return payload;
      default:
        return state;
    }
  }