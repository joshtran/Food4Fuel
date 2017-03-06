import { ADD_DELIVERY_GROCERY, ADD_DELIVERY_PRODUCE, ADD_DELIVERY_DAIRY, ADD_DELIVERY_BAKED_GOODS } from '../actions/types';

const initialState = {
  deliveryGrocery: false,
  produce: false,
  dairy: false,
  bakedGoods: false
};

export default (state = initialState, { type, payload }) => {
  switch(type)
  {
    case ADD_DELIVERY_GROCERY:
      let grocery = {deliveryGrocery: payload};
      return Object.assign({}, state, grocery);
    case ADD_DELIVERY_PRODUCE:
      let produce = {produce: payload};
      return Object.assign({}, state, produce);
    case ADD_DELIVERY_DAIRY:
      let dairy = {dairy: payload};
      return Object.assign({}, state, dairy);
    case ADD_DELIVERY_BAKED_GOODS:
      let bakedGoods = {bakedGoods: payload};
      return Object.assign({}, state, bakedGoods);  
    default:
      return state;
  }
}