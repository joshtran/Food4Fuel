import { ALL_PRODUCE, ALL_DAIRY, ALL_BAKED_GOODS } from '../actions/types';

let initialState = {
  produce: null,
  diary: null,
  bakedGoods: null
}

export default (state = initialState, { type, payload }) => {
    switch(type)
    {
      case ALL_PRODUCE:
        return payload;
      case ALL_DAIRY:
        return payload;
      case ALL_BAKED_GOODS:
        return payload;
      default:
        return state;
    }
  }