import { ADD_DELIVERY_GROCERY } from'./types';

export function setDeliveryGrocery(grocery_id) {
  return {
    type: ADD_DELIVERY_GROCERY,
    payload: groceryId
  };
}