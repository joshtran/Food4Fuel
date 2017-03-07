import { DECREMENT_REDEEM_POINTS, INCREMENT_REDEEM_POINTS, REDEEM_POINTS } from './types';

export function decrement() {
  return {
    type: DECREMENT_REDEEM_POINTS
  }
}

export function increment() {
  return {
    type: INCREMENT_REDEEM_POINTS
  }
}

export function redeem() {
  return {
    type: REDEEM_POINTS
  }
}