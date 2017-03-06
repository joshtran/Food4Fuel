import { ADD_DELIVERY_GROCERY, ADD_DELIVERY_SHELTER  } from '../actions/types';

const initialState = {
  deliveryGrocery: false,
  deliveryShelter: false
};

export default (state = initialState, { type, payload }) => {
  switch(type)
  {
    case ADD_DELIVERY_GROCERY:
      return {
        deliveryGrocery: payload,
      };
    case ADD_DELIVERY_SHELTER:
        let obj = {deliveryShelter: payload};
        return Object.assign({}, state, obj);
    default:
      return state;
  }
}