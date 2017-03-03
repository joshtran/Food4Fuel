import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

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
  boxesCounter
});
