import axios from 'axios';
import { GET_GROCERIES, GROCERY_SELECTED } from './types';

export function retrieveGroceries(groceries) {
  return {
    type: GET_GROCERIES,
    groceries
  };
}

export const grocerySelectedAction = (id) => ({ type: GROCERY_SELECTED, payload: id });