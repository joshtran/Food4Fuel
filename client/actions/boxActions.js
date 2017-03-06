import { INCREMENT_PRODUCE, DECREMENT_PRODUCE, INCREMENT_DAIRY, DECREMENT_DAIRY, INCREMENT_BAKED_GOODS, DECREMENT_BAKED_GOODS, ALL } from './types';

export function incrementProduce() {
  console.log('action creator hit');
    return {
        type: INCREMENT_PRODUCE
    }
}

export function incrementDairy() {
    return {
        type: INCREMENT_DAIRY
    }
}

export function incrementBakedGoods() {
    return {
        type: INCREMENT_BAKED_GOODS
    }
}

export function decrementProduce() {
    return {
        type: DECREMENT_PRODUCE
    }
}

export function decrementDairy() {
    return {
        type: DECREMENT_DAIRY
    }
}

export function decrementBakedGoods() {
    return {
        type: DECREMENT_BAKED_GOODS
    }
}

// export function all() {
//     return {
//         type: ALL
//     }
// }