import { ADD_DELIVERY_GROCERY, ADD_DELIVERY_PRODUCE, ADD_DELIVERY_DAIRY, ADD_DELIVERY_BAKED_GOODS } from './types';


export function setDeliveryGrocery(groceryId) {
  return {
    type: ADD_DELIVERY_GROCERY,
    payload: groceryId
  };
}

export function allProduce(produce) {
  return {
    type: ADD_DELIVERY_PRODUCE,
    payload: produce
  }
}

export function allDairy(dairy) {
  return {
    type: ADD_DELIVERY_DAIRY,
    payload: dairy
  }
}

export function allBakedGoods(bakedGoods) {
  return {
    type: ADD_DELIVERY_BAKED_GOODS,
    payload: bakedGoods
  }
}