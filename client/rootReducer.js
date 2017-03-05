import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import produceReducer from './reducers/produceReducer';
import dairyReducer from './reducers/dairyReducer';
import bakedGoodsReducer from './reducers/bakedGoodsReducer';

export default combineReducers({
  flashMessages,
  auth,
  groceries: (state = [], action) =>  state,
  selectedStore: (state = null, { type, payload }) => {
    switch(type)
    {
      case 'STORE_SELECTED':
        return payload;
      default:
        return state;
    }
  },
  shelters: (state = [], action) =>  state,
  selectedShelter: (state = null, { type, payload }) => {
    switch(type)
    {
      case 'SHELTER_SELECTED':
        return payload;
      default:
        return state;
    }
  },
  boxes: (state = [], action) => state,
  produce: produceReducer,
  dairy: dairyReducer,
  bakedGoods: bakedGoodsReducer
});
