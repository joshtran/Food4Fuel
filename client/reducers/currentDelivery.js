import { ADD_DELIVERY_GROCERY } from '../actions/types';

const initialState = {
  deliveryGrocery: false,
  deliveryShelter: false
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