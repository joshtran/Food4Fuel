import { ADD_DELIVERY_GROCERY } from'./types';

export function setDeliveryGrocery(groceryId) {
  return {
    type: ADD_DELIVERY_GROCERY,
    payload: groceryId
  };
}