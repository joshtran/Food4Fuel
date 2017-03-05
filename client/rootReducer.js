import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import selectedGrocery from './reducers/selectedGrocery';
import selectedShelter from './reducers/selectedShelter';
import groceries from './reducers/groceries';
import shelters from './reducers/shelters';
import boxes from './reducers/boxes';

export default combineReducers({
  flashMessages,
  auth,
  groceries,
  selectedGrocery,
  shelters,
  selectedShelter,
  boxes
});
