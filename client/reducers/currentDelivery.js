import { ADD_DELIVERY_GROCERY } from '../actions/types';

const initialState = {
  deliveryGrocery: false
};

export default (state = initialState, { type, payload }) => {
  switch(type)
  {
    case ADD_DELIVERY_GROCERY:
      return {deliveryGrocery: payload};
    default:
      return state;
  }
}