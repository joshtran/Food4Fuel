import { ADD_DELIVERY_GROCERY, ADD_DELIVERY_SHELTER } from'./types';

export function setDeliveryGrocery(groceryId) {
  return {
    type: ADD_DELIVERY_GROCERY,
    payload: groceryId
  };
}

export function setDeliveryShelter(shelterId) {
  return {
    type: ADD_DELIVERY_SHELTER,
    payload: shelterId
  };
}